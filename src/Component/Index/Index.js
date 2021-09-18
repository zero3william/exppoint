import React, { Component } from 'react';
import { Row, Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import './Index.css';
import './Item.js';

import w_camera from '../../assets/images/w-camera.png'
import g_list from '../../assets/images/g-list.png'
import g_pie_chart from '../../assets/images/g-pie-chart.png'
import g_management from '../../assets/images/g-management.png'
import g_controls from '../../assets/images/g-controls.png'
import w_danger from '../../assets/images/w-danger.png'
import w_arrow_up from '../../assets/images/w-arrow-up.png'
import Item from './Item.js';
import axios from 'axios';

class Index extends Component {
    constructor() {
        super();
        this.state = {
            expired_0: '',
            expired_1: '',
            expired_3: '',
            role: localStorage.getItem('Role')
        }
    }

    componentDidMount() {
        axios.get('/alert', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => { 
            res.data.data.forEach(records => {
                switch(true) {
                    case records.Status==='已過期':
                        this.setState({
                            expired_0:records.CheckDetails
                        });
                        break;
                    case records.Status==='一日內過期':
                        this.setState({
                            expired_1:records.CheckDetails
                        });
                        break;
                    case records.Status==='三日內過期':
                        this.setState({
                            expired_3:records.CheckDetails
                        });
                        break;
                }
            });
        })
        .catch(err => {
            localStorage.clear();
            const history = useHistory();
            history.push(`/`)
        });
    }

    
    render() {
        return (
            <Row id="content" className="m-0 p-0 container-fluid">
               
                {/* Left Navigation  */}
                <Col xs={12} sm={5} id="Navigation" className="pe-sm-4 pe-2">
                    <div className="d-flex flex-column h-100">
                        <div className="h-25 mb-2">
                            <div id="Scan" class="btn d-flex w-100 h-100">
                                <Link to="/Signin" style={{ textDecoration: 'none' }} className="my-auto">
                                    <div className="contentBox">
                                        <div className="clicktxt text-white">品保查檢</div>
                                        <div className="img_Container">
                                            <img className="picture" src={w_camera} alt="w_camera" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="minor d-flex flex-column justify-content-between h-100">
                            <div className="d-flex h-100">
                                <div id="Record" className="btn d-flex justify-content-center">
                                    <Link to="/Management" style={{ textDecoration: 'none' }} className="my-auto">
                                        <div className="contentBox">
                                            <div className="clicktxt align-self-center">品保紀錄</div>
                                            <div className="img_Container align-self-center">
                                                <img className="picture" src={g_list} alt="g_list" />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div id="Chart" className="btn d-flex justify-content-center">
                                    <Link to="/Statistics" style={{ textDecoration: 'none' }} className="my-auto">
                                        <div className="contentBox">
                                            <div className="clicktxt">統計圖表</div>
                                            <div className="img_Container">
                                                <img className="picture" src={g_pie_chart} alt="g_pie_chart" />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            { this.state.role==='admin' ? 
                            <div className="d-flex h-100">
                                <div id="Management" className="btn d-flex justify-content-center">
                                    <Link to="/Management" style={{ textDecoration: 'none' }} className="my-auto">
                                        <div className="contentBox">
                                            <div className="clicktxt">人員管理</div>
                                            <div className="img_Container">
                                                <img className="picture" src={g_management} alt="g_management" />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
    
                                <div id="Controls" className="btn d-flex justify-content-center">
                                    <Link to="/Management" style={{ textDecoration: 'none' }} className="my-auto">
                                        <div className="contentBox">
                                            <div className="clicktxt">提醒管理</div>
                                            <div className="img_Container">
                                                <img className="picture" src={g_controls} alt="g_controls" />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div> : null}
                        </div>
                    </div>
                </Col>
                {/* Right AlertList */}
                <Col xs={12} sm={7} id="Alert" className="d-flex flex-column p-2 mx-sm-0 mx-auto">
                    <div className="AlertTitle d-flex justify-content-center lh-base fs-5">
                        <img className="d-sm-none picture" src={w_danger} alt="w_danger" />
                        <div className="title3 mx-2 text-white align-self-center mb-1">下架提醒</div>
                        <img className="d-sm-none picture" src={w_arrow_up} alt="w_arrow_up" />
                    </div>
                    <div className="listContainer d-flex flex-column justify-content-between h-100">
                        <div className="listWrapper mb-2 h-100">
                            <div className="title expired text-center">已過期</div>
                            <div className="list bg-white mx-3">
                                { this.state.expired_0 ? this.state.expired_0.map(detail=><Item detail={detail}/>) : ''}
                            </div>
                        </div>
    
                        <div className="listWrapper mb-2 h-100">
                            <div className="title oneday text-center">一天內過期</div>
                            <div className="list bg-white mx-3">
                                { this.state.expired_1 ? this.state.expired_1.map(detail=><Item detail={detail}/>) : ''}
                            </div>
                        </div>
    
                        <div className="listWrapper mb-2 h-100">
                            <div className="title threeday text-center">三天內過期</div>
                            <div className="list bg-white mx-3">
                                { this.state.expired_3 ? this.state.expired_3.map(detail=><Item detail={detail}/>) : ''}
                            </div>
                        </div>
    
                    </div>
    
                </Col>
            </Row>
        );
    }
}

export default Index;