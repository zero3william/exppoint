import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import './Statistics.css';
import Collapse from './Collapse.js';

import back from '../../assets/images/g-button.png'
class Statistics extends Component {

    render() {
        return (
            <div id="Statistics_content" className="m-0 p-0 container-fluid">
                {/* Top */}
                <Row className="top d-flex lh-base align-items-center pt-4 mb-2">
                    <Col xs={1} className="d-flex justify-content-center">
                        <img id="back" src={back} alt="back_btn" />
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
                                <select className="form-select" defaultValue="month">
                                    <option value="month">一個月</option>
                                    <option value="week">一週</option>
                                </select>
                            </Col>
                        </Col>
                        <Row className="mt-2">
                            {/* 圖示 */}
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
                            {/* 折線圖 */}
                            <div id="chartroot" className="d-flex justify-content-center"></div>
                        </Row>
                    </Col>
                    {/* click item before */}
                    <Col xs={12} md id="Statistics_right">
                        <Col className="listtitle d-flex justify-content-center text-white fs-5">
                            <Col className="d-flex justify-content-center text-white mt-1">
                                分類
                            </Col>
                            <Col className="d-flex justify-content-center text-white mt-1">
                                總數量
                            </Col>
                        </Col>

                        <Col id="Statistics_list">
                            <Collapse />
                            <Collapse />
                            <Collapse />
                            <Collapse />
                        </Col>
                    </Col>

                    {/* click item after */}
                    {/* <Col xs={12} md id="after">
                        <Row className="listtitle d-flex justify-content-center text-white fs-5 mt-2">
                            <Col className="mt-1 d-flex">
                                <button id="back_btn" className="fs-5"><span id="btntxt">返回</span></button>
                            </Col>

                            <Col className="itemname d-flex justify-content-center text-white align-self-center">
                                茶裏王
                            </Col>
                            <Col className="d-flex justify-content-center text-white align-self-center">
                                總數量：<div id="tot">4</div>
                            </Col>
                        </Row>
                        <Row className="listtitle d-flex justify-content-center text-white fs-5">
                            <Col className="d-flex justify-content-center text-white ">
                                品名
                            </Col>
                            <Col className="d-flex justify-content-center text-white ">
                                數量
                            </Col>
                        </Row>
                        <Col id="finallist" className="fs-5">
                            <Col className="finalitems d-flex justify-content-center fs-5 mx-2 mb-1">
                                <Col className="d-flex justify-content-center name2">
                                    無糖綠茶
                                </Col>
                                <Col className="d-flex justify-content-center num2">
                                    3
                                </Col>
                            </Col>
                            <Col className="finalitems d-flex justify-content-center fs-5 mx-2 mb-1">
                                <Col className="d-flex justify-content-center name2">
                                    綠茶
                                </Col>
                                <Col className="d-flex justify-content-center num2">
                                    1
                                </Col>
                            </Col>
                        </Col>
                    </Col> */}
                </Row>
            </div>
        );
    }
}

export default Statistics;