import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Scanleave.css';
import axios from 'axios';

class Scanleave extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

        const data = JSON.parse(localStorage.getItem('scanData'));

        axios.post('/checkRecord/'+localStorage.getItem('Account'),{},{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res=>{
            const CR_ID = res.data.data.CR_ID;

            axios.post('/checkdetail/'+CR_ID,{
                CR_ID,
                CheckDetails: data
            },{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).then(res=>{
                this.setState({data});
            });
        });
    }

    render() {
        return (
            <div id="Scanleave_content" className="m-0 p-0 container-fluid">
                {/* main */}
                <Row className="fs-2 my-1 mx-0" style={{ color: "#17646F" }}>
                    <Col className="text-center p-0">掃描結果</Col>
                </Row>
                <div className="m-sm-5 m-3 mt-sm-0 mt-0" id="Scanleave_list">
                    <Row className="fs-3">
                        <Col xs={12} sm className="text-center text-white">品名</Col>
                        <Col className="text-center text-white sm_close">到期日</Col>
                        <Col className="text-center text-white sm_close">數量</Col>
                    </Row>
                    <div className="p-0 fs-4" id="Scanleave_listitem">
                {this.state.data ? this.state.data.map(item=>
                    <Row className="classdetails mx-2 my-1" key={item.Item_No}>
                        <Col className="text-center">{item.Item_Name}</Col>
                        <Col className="text-center sm_close">{item.ExpDate}</Col>
                        <Col className="text-center sm_close">{item.Amount}</Col>
                        <div className="sm_opem">
                            <Row className="" style={{ backgroundColor: "#97c5cb" }}>
                                <Col className="text-center text-white">到期日</Col>
                                <Col className="text-center text-white">數量</Col>
                            </Row>
                            <Row className="classdetails mx-2 my-1">
                                <Col className="text-center">{item.ExpDate}</Col>
                                <Col className="text-center ">{item.Amount}</Col>
                            </Row>
                        </div>
                    </Row>
                ) : ''}
                    </div>
                </div>

                {/* footer */}
                <Row id="footer" className="fixed-bottom">

                    <Col className="d-flex justify-content-center align-items-center text-white fs-3">
                        <Link to="/index" style={{ textDecoration: 'none' }} className="my-auto">
                            <button id="done" type="button" className="fs-4 btn py-1 px-2">
                                離開
                            </button>
                        </Link>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Scanleave;