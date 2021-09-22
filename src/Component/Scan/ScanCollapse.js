import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { UncontrolledCollapse } from 'reactstrap';

const ScanCollapse= () => (
    <div>
        <div>
            <Row className="classdetails mx-2 my-1">
                <Col className="text-center">統一無加糖高纖豆漿</Col>
                <Col className="text-center sm_close">2021-07-31</Col>
                <Col className="text-center sm_close">12</Col>
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

export default ScanCollapse;