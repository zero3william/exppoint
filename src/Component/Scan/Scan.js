import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Scan.css';
import ScanList from './ScanList.js';
import DateUtil from '../../utils/date';

class Scan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.randomData()
        }

        localStorage.setItem('scanData',JSON.stringify(this.state.data));
    }

    randomData() {
        let fakeData = [{
            Item_No: '010101',
            Item_Name: '光泉無加糖鮮奶豆漿375ml',
            Amount: this.random(1,3),
            ExpDate: DateUtil.dateString(Date.now()+this.random(0,2)*86400000)
        },{
            Item_No: '010102',
            Item_Name: '光泉無加糖濃豆漿375ml',
            Amount: this.random(1,3),
            ExpDate: DateUtil.dateString(Date.now()+this.random(0,2)*86400000)
        },{
            Item_No: '010201',
            Item_Name: '瑞穗全脂鮮乳290ml',
            Amount: this.random(1,3),
            ExpDate: DateUtil.dateString(Date.now()+this.random(0,2)*86400000)
        },{
            Item_No: '010207',
            Item_Name: '統一營養強化牛乳(高鈣牛乳)400ml',
            Amount: this.random(1,3),
            ExpDate: DateUtil.dateString(Date.now()+this.random(0,2)*86400000)
        },{
            Item_No: '010307',
            Item_Name: '瑞穗麥芽牛奶400ml',
            Amount: this.random(1,3),
            ExpDate: DateUtil.dateString(Date.now()+this.random(0,2)*86400000)
        },{
            Item_No: '010313',
            Item_Name: '福樂鮮攪草莓奶茶375ml',
            Amount: this.random(1,3),
            ExpDate: DateUtil.dateString(Date.now()+this.random(0,2)*86400000)
        },{
            Item_No: '010403',
            Item_Name: '波蜜一日蔬果100%蔬果汁400ml',
            Amount: this.random(1,3),
            ExpDate: DateUtil.dateString(Date.now()+this.random(0,2)*86400000)
        },{
            Item_No: '030201',
            Item_Name: '蝦味先經典原味',
            Amount: this.random(1,3),
            ExpDate: DateUtil.dateString(Date.now()+this.random(0,2)*86400000)
        },{
            Item_No: '030401',
            Item_Name: '滿天星經典田園口味',
            Amount: this.random(1,3),
            ExpDate: DateUtil.dateString(Date.now()+this.random(0,2)*86400000)
        },{
            Item_No: '040103',
            Item_Name: '原味本舖-經典檸檬冰棒',
            Amount: this.random(1,3),
            ExpDate: DateUtil.dateString(Date.now()+this.random(0,2)*86400000)
        },{
            Item_No: '040205',
            Item_Name: '哈根達斯覆盆子品脫',
            Amount: this.random(1,3),
            ExpDate: DateUtil.dateString(Date.now()+this.random(0,2)*86400000)
        },{
            Item_No: '030301',
            Item_Name: '咔辣姆久平切洋芋片-勁辣唐辛子口味',
            Amount: this.random(1,3),
            ExpDate: DateUtil.dateString(Date.now()+this.random(0,2)*86400000)
        },{
            Item_No: '030103',
            Item_Name: '樂事照燒口味',
            Amount: this.random(1,3),
            ExpDate: DateUtil.dateString(Date.now()+this.random(0,2)*86400000)
        },{
            Item_No: '020403',
            Item_Name: '統一UNI礦泉水600ml',
            Amount: this.random(1,3),
            ExpDate: DateUtil.dateString(Date.now()+this.random(0,2)*86400000)
        },{
            Item_No: '040102',
            Item_Name: '原味本舖-經典花生口味',
            Amount: this.random(1,3),
            ExpDate: DateUtil.dateString(Date.now()+this.random(0,2)*86400000)
        }];

        let data=[];

        const dataLength = this.random(3,6);

        for(let i=0;i<dataLength;i++) {
            const index = this.random(0,100)%fakeData.length;
            data.push(fakeData[index]);
            fakeData.splice(index,1);
        }
        return data;
    }

    // random min~max
    random(min,max) {
        return Math.floor(Math.random()*(max-min+1))+min;
    }

    render() {
        return (
            <div id="Scan_content" className="m-0 p-0 container-fluid">
                {/* main */}
                <video>

                </video>

                {/* footer */}
                <Row id="footer" className="fixed-bottom">
                    <Col xs={4} className="d-flex justify-content-center align-items-center">
                        <Link to="/Scanleave" style={{ textDecoration: 'none' }} className="my-auto">
                            <button id="done" type="button" className="fs-4 btn py-1 px-2">
                                完成
                            </button>
                        </Link>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center text-white fs-3">
                        掃描中
                    </Col>
                    {/* ScanList */}
                    <Col xs={4} className="d-flex justify-content-center align-items-center">
                        {/* <button id="done" type="button" className="fs-4 btn py-1 px-2">
                            <img id="listbtn" src={w_list} />
                        </button> */}
                        <ScanList data={this.state.data} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Scan;