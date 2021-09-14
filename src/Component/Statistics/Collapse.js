import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

const Collapse = () => (
    <div>
        <div className="items fs-4 mx-2 mb-1">
            <Row className="d-flex py-1 "type="button" id="toggler">
                    <Col className="col name ps-4">冷凍食品</Col>
                    <Col className="col num text-end">40</Col>
            </Row>
            <UncontrolledCollapse toggler="#toggler">
                <div className="details">
                    <Row className="row classitems  py-1 my-1 mx-1">
                        <Col className="col name ps-4"> 冷凍食品</Col>
                        <Col className="col num text-end"> 20</Col>
                    </Row>
                    <Row className="row classitems  py-1 my-1 mx-1">
                        <Col className="col name ps-4"> 冷凍食品</Col>
                        <Col className="col num text-end"> 20</Col>
                    </Row>
                    <Row className="row classitems  py-1 my-1 mx-1">
                        <Col className="col name ps-4"> 冷凍食品</Col>
                        <Col className="col num text-end"> 20</Col>
                    </Row>
                </div>
            </UncontrolledCollapse>
        </div>
    </div>
);

export default Collapse;