import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { UncontrolledCollapse } from 'reactstrap';

const ListNsearchCollapse = () => (
    <div className="">
        <Row className="listitem mx-2 my-2 fs-3" type="button" id="toggler">
            <Col xs={12} sm={6} className="d-flex justify-content-start ">品名可能會有十五到二十個字真的是有夠長捏</Col>
            <Col xs={4} sm={3} className="justify-content-center sm_close text-center">2021-09-17</Col>
            <Col xs={3} sm={3} className="justify-content-center sm_close text-center">王曉明</Col>

            <UncontrolledCollapse toggler="#toggler" className="m-0 p-0">
                <div className="sm_open">
                    <Row className=" p-0 m-0" style={{ backgroundColor: "#8BCDD4" }}>
                        <Col className="text-center text-white"> 查檢日期</Col>
                        <Col className="text-center text-white"> 查檢人</Col>
                    </Row>
                    <Row className="">
                        <Col className="text-center"> 2021-07-28</Col>
                        <Col className="text-center"> 王曉明</Col>
                    </Row>
                </div>
                <div className="ListNsearch_details">
                    <Row className="">
                        <Col className="text-center"> 到期日</Col>
                        <Col className="text-center"> 數量</Col>
                        <Col className="text-center"> 狀態</Col>
                    </Row>
                    <Row className="">
                        <Col className="text-center"> 2021-07-28</Col>
                        <Col className="text-center"> 10</Col>
                        <Col className="text-center"> 未下架</Col>
                    </Row>
                </div>
            </UncontrolledCollapse>
        </Row>
    </div>
);

export default ListNsearchCollapse;