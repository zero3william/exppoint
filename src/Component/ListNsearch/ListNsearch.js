import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './ListNsearch.css';

import back from '../../assets/images/g-button.png'

class ListNsearch extends Component {

    render() {
        return (
            <div id="ListNsearch_content" className="m-0 p-0 container-fluid">
                {/* Top */}
                <Row className="top d-flex lh-base align-items-center pt-4 mb-2">
                    <Col xs={2} sm={1} className="d-flex justify-content-center">
                        <Link to="/index" style={{ textDecoration: 'none' }} className="my-auto">
                            <img id="back" src={back} alt="back_btn" />
                        </Link>
                    </Col>
                    <Col className="title py-1 fs-2 text-center">
                        品保紀錄
                    </Col>
                    <Col xs={2} sm={1} className="d-flex mt-2 text-end">
                    </Col>
                </Row>
                {/* middle */}
                <Row className="mid d-flex lh-base align-items-center">
                    <Col xs={12} id="list" className="">
                        <Row className="d-flex justify-content-center text-white mt-1 fs-3">
                            <Col className="justify-content-center text-center">查檢日期</Col>
                            <Col className="justify-content-center text-center">查檢人</Col>

                        </Row>
                        <div id="listplace">
                            <Link to="/list" style={{ textDecoration: 'none', color: "#000000" }} className="my-auto">
                                <Row className="listitem mx-2 my-2 fs-3">
                                    <Col className="justify-content-center text-center">2021-09-17</Col>
                                    <Col className="justify-content-center text-center">江小月</Col>
                                </Row>
                            </Link>
                            <Row className="listitem mx-2 my-2 fs-3">
                                <Col className="justify-content-center text-center">2021-09-16</Col>
                                <Col className="justify-content-center text-center">王曉明</Col>
                            </Row>
                            <Row className="listitem mx-2 my-2 fs-3">
                                <Col className="justify-content-center text-center">2021-09-15</Col>
                                <Col className="justify-content-center text-center">江小月</Col>
                            </Row>
                            <Row className="listitem mx-2 my-2 fs-3">
                                <Col className="justify-content-center text-center">2021-09-14</Col>
                                <Col className="justify-content-center text-center">王曉明</Col>
                            </Row>
                            <Row className="listitem mx-2 my-2 fs-3">
                                <Col className="justify-content-center text-center">2021-09-13</Col>
                                <Col className="justify-content-center text-center">江小月</Col>
                            </Row>
                            <Row className="listitem mx-2 my-2 fs-3">
                                <Col className="justify-content-center text-center">2021-09-12</Col>
                                <Col className="justify-content-center text-center">王曉明</Col>
                            </Row>
                            <Row className="listitem mx-2 my-2 fs-3">
                                <Col className="justify-content-center text-center">2021-09-11</Col>
                                <Col className="justify-content-center text-center">江小月</Col>
                            </Row>
                            <Row className="listitem mx-2 my-2 fs-3">
                                <Col className="justify-content-center text-center">2021-09-10</Col>
                                <Col className="justify-content-center text-center">王曉明</Col>
                            </Row>

                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ListNsearch;