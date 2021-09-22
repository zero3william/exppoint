import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { UncontrolledCollapse } from 'reactstrap';

const CollapseDetails = () => (
    <div>
        <div>
            <Row className="listitem mx-2 my-2 fs-3">
                <Col xs={12} sm={6} className="d-flex justify-content-start ">二十個字真的是有夠長捏</Col>
                <Col xs={4} sm={3} className="d-flex justify-content-center  showornot">2021-07-28</Col>
                <Col xs={3} sm={3} className="d-flex justify-content-center  showornot">王曉明</Col>
            </Row>
            <UncontrolledCollapse toggler="#toggler">
                <div className="details">
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
        </div>
    </div>
);

export default CollapseDetails;