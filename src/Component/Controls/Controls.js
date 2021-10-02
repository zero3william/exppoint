import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Controls.css';

import back from '../../assets/images/g-button.png'
import ControlsEditModal from './ControlsEditModal.js';
import axios from 'axios';
class Controls extends Component {
    constructor(props) {
        super(props);

        this.chart = null;

        this.state = {
            list: []
        }
    }

    componentDidMount() {
        this.getList();
    }

    getList() {
        axios.get('/category', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res=>{
            this.setState({list:res.data.data})
        });
    }

    render() {
        return (
            <div id="Controls_content" className="m-0 p-0 container-fluid">
                {/* Top */}
                <Row className="top d-flex lh-base align-items-center pt-4 mb-2">
                    <Col xs={2} sm={1} className="d-flex justify-content-center">
                        <Link to="/index" style={{ textDecoration: 'none' }} className="my-auto">
                            <img id="back" src={back} alt="back_btn" />
                        </Link>
                    </Col>
                    <Col className="title py-1 fs-2 text-center">
                        提醒管理
                    </Col>
                    <Col xs={2} sm={1}>

                    </Col>
                </Row>
                {/* middle */}
                <Row className="mid d-flex lh-base align-items-center mx-md-5 mx-3">
                    <Col xs={12} id="Controls2" className="">
                        <Row className="d-flex justify-content-center text-white mt-1 px-md-3 fs-3 px-1">
                            <Col xs={4} className="d-flex justify-content-center">類別</Col>
                            <Col xs={5} className="d-flex justify-content-center">到期前天數</Col>
                            <Col xs={3} className="d-flex justify-content-center"></Col>
                        </Row>
                        <div id="Controls_list">
                            {this.state.list.map(data=>{
                                return <Row className="listitem mx-md-2 mx-1 my-2 fs-3 justify-content-center" key={data.Category_ID}>
                                    <Col xs={4} className="d-flex justify-content-center">{data.Category_Sub}</Col>
                                    <Col xs={5} className="d-flex justify-content-center">{data.Category_Alert}</Col>

                                    <Col xs={3} className="d-flex justify-content-center">
                                        <ControlsEditModal data={data} updateAlert={()=>{this.getList();}} />
                                    </Col>
                                </Row>
                            })}
                            
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Controls;