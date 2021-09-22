import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Scanleave.css';

class Scanleave extends Component {

    render() {
        return (
            <div id="Scanleave_content" className="m-0 p-0 container-fluid">
                {/* main */}
                <Row className="fs-2 my-1 mx-0" style={{ color: "#17646F" }}>
                    <Col className="text-center p-0">掃描結果</Col>
                </Row>
                <div className="m-sm-5 m-3 mt-sm-0 mt-0" id="Scanleave_list">
                    <Row className="fs-3">
                        <Col xs={12} sm className="text-center text-white">品名</Col>
                        <Col className="text-center text-white sm_close">到期日</Col>
                        <Col className="text-center text-white sm_close">數量</Col>
                    </Row>
                    <div className="p-0 fs-4" id="Scanleave_listitem">
                        <Row className="classdetails mx-2 my-1">
                            <Col className="text-center">統一無加糖高纖豆漿</Col>
                            <Col className="text-center sm_close">2021-07-31</Col>
                            <Col className="text-center sm_close">12</Col>
                            <div className="sm_opem">
                                <Row className="" style={{ backgroundColor: "#97c5cb" }}>
                                    <Col className="text-center text-white">到期日</Col>
                                    <Col className="text-center text-white">數量</Col>
                                </Row>
                                <Row className="classdetails mx-2 my-1">
                                    <Col className="text-center">2021-07-31</Col>
                                    <Col className="text-center ">12</Col>
                                </Row>
                            </div>
                        </Row>
                        <Row className="classdetails mx-2 my-1">
                            <Col className="text-center">統一無加糖高纖豆漿</Col>
                            <Col className="text-center sm_close">2021-07-31</Col>
                            <Col className="text-center sm_close">12</Col>
                            <div className="sm_opem">
                                <Row className="" style={{ backgroundColor: "#97c5cb" }}>
                                    <Col className="text-center text-white">到期日</Col>
                                    <Col className="text-center text-white">數量</Col>
                                </Row>
                                <Row className="classdetails mx-2 my-1">
                                    <Col className="text-center">2021-09-03</Col>
                                    <Col className="text-center ">8</Col>
                                </Row>
                            </div>
                        </Row>
                        <Row className="classdetails mx-2 my-1">
                            <Col className="text-center">統一無加糖高纖豆漿</Col>
                            <Col className="text-center sm_close">2021-07-31</Col>
                            <Col className="text-center sm_close">12</Col>
                            <div className="sm_opem">
                                <Row className="" style={{ backgroundColor: "#97c5cb" }}>
                                    <Col className="text-center text-white">到期日</Col>
                                    <Col className="text-center text-white">數量</Col>
                                </Row>
                                <Row className="classdetails mx-2 my-1">
                                    <Col className="text-center">2021-07-31</Col>
                                    <Col className="text-center ">12</Col>
                                </Row>
                            </div>
                        </Row>
                        <Row className="classdetails mx-2 my-1">
                            <Col className="text-center">統一無加糖高纖豆漿</Col>
                            <Col className="text-center sm_close">2021-07-31</Col>
                            <Col className="text-center sm_close">12</Col>
                            <div className="sm_opem">
                                <Row className="" style={{ backgroundColor: "#97c5cb" }}>
                                    <Col className="text-center text-white">到期日</Col>
                                    <Col className="text-center text-white">數量</Col>
                                </Row>
                                <Row className="classdetails mx-2 my-1">
                                    <Col className="text-center">2021-09-03</Col>
                                    <Col className="text-center ">8</Col>
                                </Row>
                            </div>
                        </Row>
                    </div>
                </div>

                {/* footer */}
                <Row id="footer" className="fixed-bottom">

                    <Col className="d-flex justify-content-center align-items-center text-white fs-3">
                        <Link to="/index" style={{ textDecoration: 'none' }} className="my-auto">
                            <button id="done" type="button" className="fs-4 btn py-1 px-2">
                                離開
                            </button>
                        </Link>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Scanleave;