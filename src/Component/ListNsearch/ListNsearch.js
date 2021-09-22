import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './ListNsearch.css';
import ListNsearchCollapse from './ListNsearchCollapse.js';
import SearchModal from './SearchModal.js';

import back from '../../assets/images/g-button.png';

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
                        <SearchModal />
                    </Col>
                </Row>
                {/* middle */}
                <Row className="mid d-flex lh-base align-items-center">
                    <Col xs={12} id="list" className="">
                        <Row className="d-flex justify-content-center text-white mt-1 px-3 fs-3">
                            <Col xs={12} sm={6} className="d-flex justify-content-center ">品名</Col>
                            <Col sm={3} className="justify-content-center sm_close text-center">查檢日期</Col>
                            <Col sm={3} className="justify-content-center sm_close text-center">查檢人</Col>

                        </Row>
                        <div id="listplace">
                            <ListNsearchCollapse />
                            <ListNsearchCollapse />
                            <ListNsearchCollapse />
                            <ListNsearchCollapse />
                            {/* <Row className="listitem mx-2 my-2 fs-3">
                                <Col xs={12} sm={6} className="d-flex justify-content-start ">品名可能會有十五到二十個字真的是有夠長捏</Col>
                                <Col xs={4} sm={3} className="justify-content-center sm_close text-center">2021-09-17</Col>
                                <Col xs={3} sm={3} className="justify-content-center sm_close text-center">王曉明</Col>
                            </Row>
                            <Row className="listitem mx-2 my-2 fs-3">
                                <Col xs={12} sm={6} className="d-flex justify-content-start ">品名可能會有十五到二十個字真的是有夠長捏</Col>
                                <Col xs={4} sm={3} className="justify-content-center sm_close text-center">2021-09-17</Col>
                                <Col xs={3} sm={3} className="justify-content-center sm_close text-center">王曉明</Col>
                            </Row>
                            <Row className="listitem mx-2 my-2 fs-3">
                                <Col xs={12} sm={6} className="d-flex justify-content-start ">品名可能會有十五到二十個字真的是有夠長捏</Col>
                                <Col xs={4} sm={3} className="justify-content-center sm_close text-center">2021-09-17</Col>
                                <Col xs={3} sm={3} className="justify-content-center sm_close text-center">王曉明</Col>
                            </Row>
                            <Row className="listitem mx-2 my-2 fs-3">
                                <Col xs={12} sm={6} className="d-flex justify-content-start ">品名可能會有十五到二十個字真的是有夠長捏</Col>
                                <Col xs={4} sm={3} className="justify-content-center sm_close text-center">2021-09-17</Col>
                                <Col xs={3} sm={3} className="justify-content-center sm_close text-center">王曉明</Col>
                            </Row>
                            <Row className="listitem mx-2 my-2 fs-3">
                                <Col xs={12} sm={6} className="d-flex justify-content-start ">品名可能會有十五到二十個字真的是有夠長捏</Col>
                                <Col xs={4} sm={3} className="justify-content-center sm_close text-center">2021-09-17</Col>
                                <Col xs={3} sm={3} className="justify-content-center sm_close text-center">王曉明</Col>
                            </Row>
                            <Row className="listitem mx-2 my-2 fs-3">
                                <Col xs={12} sm={6} className="d-flex justify-content-start ">品名可能會有十五到二十個字真的是有夠長捏</Col>
                                <Col xs={4} sm={3} className="justify-content-center sm_close text-center">2021-09-17</Col>
                                <Col xs={3} sm={3} className="justify-content-center sm_close text-center">王曉明</Col>
                            </Row>
                            <Row className="listitem mx-2 my-2 fs-3">
                                <Col xs={12} sm={6} className="d-flex justify-content-start ">品名可能會有十五到二十個字真的是有夠長捏</Col>
                                <Col xs={4} sm={3} className="justify-content-center sm_close text-center">2021-09-17</Col>
                                <Col xs={3} sm={3} className="justify-content-center sm_close text-center">王曉明</Col>
                            </Row>
                            <Row className="listitem mx-2 my-2 fs-3">
                                <Col xs={12} sm={6} className="d-flex justify-content-start ">品名可能會有十五到二十個字真的是有夠長捏</Col>
                                <Col xs={4} sm={3} className="justify-content-center sm_close text-center">2021-09-17</Col>
                                <Col xs={3} sm={3} className="justify-content-center sm_close text-center">王曉明</Col>
                            </Row>
                            <Row className="listitem mx-2 my-2 fs-3">
                                <Col xs={12} sm={6} className="d-flex justify-content-start ">品名可能會有十五到二十個字真的是有夠長捏</Col>
                                <Col xs={4} sm={3} className="justify-content-center sm_close text-center">2021-09-17</Col>
                                <Col xs={3} sm={3} className="justify-content-center sm_close text-center">王曉明</Col>
                            </Row>
                            <Row className="listitem mx-2 my-2 fs-3">
                                <Col xs={12} sm={6} className="d-flex justify-content-start ">品名可能會有十五到二十個字真的是有夠長捏</Col>
                                <Col xs={4} sm={3} className="justify-content-center sm_close text-center">2021-09-17</Col>
                                <Col xs={3} sm={3} className="justify-content-center sm_close text-center">王曉明</Col>
                            </Row> */}

                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ListNsearch;