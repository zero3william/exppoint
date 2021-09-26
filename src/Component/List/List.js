import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './List.css';
import ListCollapse from './List_Collapse.js';

import back from '../../assets/images/g-button.png'

class List extends Component {

    render() {
        return (
            <div id="ListNsearch_content" className="m-0 p-0 container-fluid">
                {/* Top */}
                <Row className="top d-flex lh-base align-items-center pt-4 mb-2">
                    <Col xs={2} sm={1} className="d-flex justify-content-center">
                        <Link to="/listNsearch" style={{ textDecoration: 'none' }} className="my-auto">
                            <img id="back" src={back} alt="back_btn" />
                        </Link>
                    </Col>
                    <Col className="title py-1 fs-2 text-center">
                        2021-09-17
                    </Col>
                    <Col xs={2} sm={1} className="d-flex mt-2 text-end">
                    </Col>
                </Row>
                {/* middle */}
                <Row className="mid d-flex lh-base align-items-center">
                    <Col xs={12} id="list" className="">
                        <Row className="d-flex justify-content-center text-white mt-1 fs-3">
                            <Col className="justify-content-center text-center">查檢品項</Col>
                        </Row>
                        <div id="listplace">
                            <ListCollapse />
                            <Row className="listitem mx-2 my-2 fs-3">
                                <Col className="justify-content-center text-center">統一陽光高纖豆漿</Col>
                            </Row>
                            <Row className="listitem mx-2 my-2 fs-3">
                                <Col className="justify-content-center text-center">統一陽光低糖高纖豆漿</Col>
                            </Row>
                            <Row className="listitem mx-2 my-2 fs-3">
                                <Col className="justify-content-center text-center">統一陽光高纖燕麥穀奶</Col>
                            </Row>
                            <Row className="listitem mx-2 my-2 fs-3">
                                <Col className="justify-content-center text-center">統一陽光糙米漿</Col>
                            </Row>

                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default List;