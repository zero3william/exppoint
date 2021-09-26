import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { UncontrolledCollapse } from 'reactstrap';

const ListCollapse = () => (
    <div className="">
        <Row className="listitem mx-2 my-2 fs-3" type="button" id="toggler">
            <Col className="justify-content-center text-center">統一陽光無加糖高纖豆漿</Col>

            <UncontrolledCollapse toggler="#toggler" className="m-0 p-0">
                <div className="ListNsearch_details">
                    <Row className="p-0 m-0" style={{ backgroundColor: "#8BCDD4" }}>
                        <Col className="text-center text-white"> 到期日</Col>
                        <Col className="text-center text-white"> 數量</Col>
                    </Row>
                    <Row className="p-0 m-0" style={{ backgroundColor: "rgb(206 111 111)", color: "#ffffff" }}>
                        <Col className="text-center"> 2021-09-28</Col>
                        <Col className="text-center"> 10</Col>
                    </Row>
                    <Row className="p-0 m-0">
                        <Col className="text-center"> 2021-09-26</Col>
                        <Col className="text-center"> 8</Col>
                    </Row>
                    <Row className="p-0 m-0">
                        <Col className="text-center"> 2021-09-24</Col>
                        <Col className="text-center"> 3</Col>
                    </Row>
                </div>
            </UncontrolledCollapse>
        </Row>
    </div>
);

export default ListCollapse;