import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Statistics.css';
import Collapse from './Collapse.js';
import axios from 'axios';
import Chart from 'chart.js/auto';
import back from '../../assets/images/g-button.png';
import DateUtil from '../../utils/date';
import { Link } from 'react-router-dom';
class Statistics extends Component {
    constructor(props) {
        super(props);

        this.chart = null;

        this.state = {
            statistics: [],
            isMain: true,
            subData: {}
        }
    }

    componentDidMount() {
        this.getStatistics('month');
    }

    onSelect = (e)=>{
        this.getStatistics(e.target.value);
    }

    getStatistics = (str)=>{
        const colorArr = ['#f85672','#f09f3d','#f3e852','#adf16d','#0daeff'];

        axios.get('/statistics/'+str, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
            let labels = [];
            let datasets = [];

            res.data.data.forEach((main,mainIndex) => {
                const mainTitle = main.MainType;
                let data = [];
                main.SubTypes.forEach(sub => {
                    // const subTitle = sub.SubType;
                    sub.Items.forEach(item=>{
                        // const name = item.Item_Name;
                        item.Records.forEach(record=>{
                            const amount = record.Amount;
                            const date = record.CheckTime.split(' ')[0];
                            const labelIndex = labels.indexOf(date);
                            if(labels.length===0) {
                                labels.push(date);
                                data.push(amount);
                            } else if(labelIndex<0) {
                                const daysAway = DateUtil.nDaysAway(date,labels[0]);
                                if(daysAway>0) {
                                    for(let i=daysAway-1;i>0;i--) {
                                        labels.splice(0,0,DateUtil.dateString(Date.parse(date)+86400000*i));
                                        data.splice(0,0,0);
                                    }
                                    labels.splice(0,0,date);
                                    data.splice(0,0,amount);
                                } else {
                                    const daysAway = DateUtil.nDaysAway(labels[labels.length-1],date);
                                    for(let i=1;i<daysAway;i++) {
                                        labels.push(DateUtil.dateString(Date.parse(date)-86400000*(daysAway-i)));
                                        data.push(0);
                                    }
                                    labels.push(date);
                                    data.push(amount);
                                }
                            } else {
                                data[labelIndex]+=amount;
                            }
                        });
                    });
                });
                datasets.push({
                    label: mainTitle,
                    backgroundColor: colorArr[mainIndex], 
                    borderColor: colorArr[mainIndex],
                    data,
                })
            });

            datasets = datasets.sort((a,b)=>{
                const aSum = a.data.length===0 ? 0 : a.data.reduce((a1,a2)=>a1+a2);
                const bSum = b.data.length===0 ? 0 : b.data.reduce((b1,b2)=>b1+b2);
                return aSum > bSum ? -1 : 0;
            });

            this.setState({
                statistics: datasets.map(data=>{
                    const index = res.data.data.findIndex(main=>main.MainType===data.label);
                    return res.data.data[index];
                })
            });

            labels = labels.map(date=>date.split('-').splice(1,2).join('-'));
            const ctx = document.getElementById('chartroot'); 
            if(this.chart) this.chart.destroy();
            this.chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels,
                    datasets: datasets.splice(0,5)
                },
                options: {
                    scales: {
                        y: {
                            ticks: {
                                beginAtZero: true,
                                callback: value=>value%1===0 ? value : null
                            }
                        }
                    }
                }
            });
        }).catch(err => {
            localStorage.clear();
            window.location.href = '/'
        });
    }

    render() {
        return (
            <div id="Statistics_content" className="m-0 p-0 container-fluid">
                {/* Top */}
                <Row className="top d-flex lh-base align-items-center pt-4 mb-2">
                    <Col xs={1} className="d-flex justify-content-center">
                        <Link to="/"><img id="back" src={back} alt="back_btn" /></Link>   
                    </Col>
                    <Col className="title me-sm-5 me-1 py-1 fs-2">
                        統計圖表
                    </Col>
                </Row>
                {/* middle */}
                <Row className="mid d-flex lh-base align-items-center my-auto">
                    {/* left */}
                    <Col id="Statistics_left" className="left col align-items-center">
                        {/* 下拉式選單 */}
                        <Col id="options" className="d-flex justify-content-center w-75 text-center mt-2">
                            <Col>
                                <select className="form-select" defaultValue="month" onChange={this.onSelect}>
                                    <option value="month">一個月</option>
                                    <option value="week">一週</option>
                                </select>
                            </Col>
                        </Col>
                        <Row className="mt-2">
                            {/* 圖示 */}
                            {/* 折線圖 */}
                            <canvas id="chartroot" className="d-flex justify-content-center"></canvas>
                        </Row>
                    </Col>
                   
                    {/* right */}
                    <Col xs={12} md id="Statistics_right">
                    {this.state.isMain ? 
                    <>
                        <Col className="listtitle d-flex justify-content-center text-white fs-5">
                            <Col className="d-flex justify-content-center text-white mt-1">
                                分類
                            </Col>
                            <Col className="d-flex justify-content-center text-white mt-1">
                                總數量
                            </Col>
                        </Col>
                        <Col id="Statistics_list">
                            {this.state.statistics.map(data=><Collapse data={data} key={data.MainType} sub={(subData)=>{this.setState({isMain:false,subData}); }} />)}
                        </Col>
                    </>
                    :
                    <>
                        <Col className="listtitle d-flex justify-content-between text-white fs-5">
                            <img id="back" src={back} alt="back_btn" onClick={()=>{this.setState({isMain:true})}} />
                            <div>{this.state.subData.title}</div> 
                            <div>總數量:{this.state.subData.amount}</div>
                        </Col>
                        <div className="Statistics_details">
                        {this.state.subData.items.map(data=>
                        <div className="items fs-4 mx-2 mb-1" key={data.Item_Name}>
                            <Row className="d-flex py-1" key={data.Item_Name}>
                                <Col xs={10} className="name ps-4">{data.Item_Name}</Col>
                                <Col xs={2} className="num text-end">{data.Records.reduce((a,b)=>a+b.Amount,0)}</Col>
                            </Row>
                        </div>   
                        )}
                        </div>
                    </>

                    }
                        
                    </Col>
       
                </Row>
            </div>
        );
    }
}

export default Statistics;