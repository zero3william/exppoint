import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import Member from './Member/Member'
import './Statistics.css';
import Collapse from './Collapse.js';

import back from '../../assets/images/g-button.png'

// import MemberList from '../../assets/json/member.json'
class Statistics extends Component {

    render() {
        return (
            <div id="content" className="m-0 p-0 container-fluid">
                {/* Top */}
                <Row className="top d-flex lh-base align-items-center px-5 pt-4 mb-2">
                    <Col xs={1} className="d-flex justify-content-center">
                        <img id="back" src={back} alt="back_btn" />
                    </Col>
                    <Col className="title me-sm-5 me-1 py-1 fs-2">
                        統計圖表
                    </Col>
                </Row>
                {/* middle */}
                <Row className="mid d-flex lh-base align-items-center">
                    {/* left */}
                    <Col id="left" className="left col align-items-center">
                        {/* 下拉式選單 */}
                        <Col id="options" className="d-flex justify-content-center w-75 text-center mt-2">
                            <Col>
                                <select className="form-select">
                                    <option value="month" selected>一個月</option>
                                    <option value="week">一週</option>
                                </select>
                            </Col>
                        </Col>
                        <Row className="mt-2">
                            {/* 折線圖 */}
                            <div className="chart-title d-flex justify-content-center">
                                <Col className="mark text-center mx-auto" id="cue1" style={{ backgroundColor: "#ffffff" }}>
                                    <div className="d-block d-sm-flex text-center mx-auto align-self-center justify-content-center">
                                        <div className="cue1-mark circle align-self-center mx-sm-1 mx-auto"></div>
                                        冷凍食品
                                    </div>
                                </Col>
                                <Col className="mark text-center mx-auto" id="cue2" style={{ backgroundColor: "#ffffff" }}>
                                    <div className="d-block d-sm-flex text-center mx-auto align-self-center justify-content-center">
                                        <div className="cue2-mark circle align-self-center mx-sm-1 mx-auto"></div>
                                        飲料
                                    </div>
                                </Col>
                                <Col className="mark text-center mx-auto" id="cue3" style={{ backgroundColor: "#ffffff" }}>
                                    <div className="d-block d-sm-flex text-center mx-auto align-self-center justify-content-center">
                                        <div className="cue3-mark circle align-self-center mx-sm-1 mx-auto"></div>
                                        泡麵
                                    </div>
                                </Col>
                                <Col className="mark text-center mx-auto" id="cue4" style={{ backgroundColor: "#ffffff" }}>
                                    <div className="d-block d-sm-flex text-center mx-auto align-self-center justify-content-center">
                                        <div className="cue4-mark circle align-self-center mx-sm-1 mx-auto"></div>
                                        零食
                                    </div>
                                </Col>
                                <Col className="mark text-center mx-auto" id="cue5" style={{ backgroundColor: "#ffffff" }}>
                                    <div className="d-block d-sm-flex text-center mx-auto align-self-center justify-content-center">
                                        <div className="cue5-mark circle align-self-center mx-sm-1 mx-auto"></div>
                                        餅乾
                                    </div>
                                </Col>
                            </div>
                            <div id="chartroot" className="d-flex justify-content-center"></div>
                        </Row>
                    </Col>
                    {/* right before */}
                    <Col xs={12} md id="right">
                        <Col className="listtitle d-flex justify-content-center text-white fs-5">
                            <Col className="d-flex justify-content-center text-white mt-1">
                                分類
                            </Col>
                            <Col className="d-flex justify-content-center text-white mt-1">
                                總數量
                            </Col>
                        </Col>

                        <Col id="list">
                            <Collapse />
                            <Collapse />
                            <Collapse />
                            <Collapse />
                        </Col>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Statistics;