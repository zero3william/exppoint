import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ListNsearch.css';
import axios from 'axios';
import back from '../../assets/images/g-button.png'

class ListNsearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkRecords: [],
        }
    }

    componentDidMount() {
        this.getCheckRecords();
    }

    getCheckRecords = ()=>{
        axios.get('/checkRecord', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res=>{
            this.setState({checkRecords: res.data.data.map(record=>{
                return {...record,CheckTime:record.CheckTime.split(' ')[0]};
            })});
        });
    }

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
                    </Col>
                </Row>
                {/* middle */}
                <Row className="mid d-flex lh-base align-items-center">
                    <Col xs={12} id="list" className="">
                        <Row className="d-flex justify-content-center text-white mt-1 fs-3">
                            <Col className="justify-content-center text-center">查檢日期</Col>
                            <Col className="justify-content-center text-center">查檢人</Col>

                        </Row>
                        <div id="listplace">
                        {this.state.checkRecords.map(record=>
                            <Link key={record.CR_ID} to={{ pathname:"/list", record }} style={{ textDecoration: 'none', color: "#000000" }} className="my-auto">
                                <Row className="listitem mx-2 my-2 fs-3">
                                    <Col className="justify-content-center text-center">{record.CheckTime}</Col>
                                    <Col className="justify-content-center text-center">{record.Inspector_Username}</Col>
                                </Row>
                            </Link>
                        )}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ListNsearch;