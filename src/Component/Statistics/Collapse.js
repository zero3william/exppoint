import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { UncontrolledCollapse } from 'reactstrap';

import g_triangle from '../../assets/images/g-triangle.png';

const Collapse = () => (
    <div>
        <div className="items fs-4 mx-2 mb-1">
            <Row className="d-flex py-1 " type="button" id="toggler">
                <Col xs={1}><img alt='' className="modelpic" src={g_triangle} /></Col>
                <Col className="name ps-4">冷凍食品</Col>
                <Col className="num text-end">40</Col>
            </Row>
            <UncontrolledCollapse toggler="#toggler">
                <div className="Statistics_details">
                    <Row className="classitems  py-1 my-1 mx-1">
                        <Col className="name ps-4"> 冷凍食品</Col>
                        <Col className="num text-end"> 20</Col>
                    </Row>
                    <Row className="classitems  py-1 my-1 mx-1">
                        <Col className="name ps-4"> 冷凍食品</Col>
                        <Col className="num text-end"> 20</Col>
                    </Row>
                    <Row className="classitems  py-1 my-1 mx-1">
                        <Col className="name ps-4"> 冷凍食品</Col>
                        <Col className="num text-end"> 20</Col>
                    </Row>
                </div>
            </UncontrolledCollapse>
        </div>
    </div>
);

export default Collapse;