import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
// import axios from 'axios';
import './List.css';
import ListCollapse from './List_Collapse.js';

import back from '../../assets/images/g-button.png'

class List extends Component {
    constructor(props) {
        super(props);
        if(!this.props.location.record) {
            window.location.href = '/listNsearch'
        }
        this.state = {
            ...this.props.location.record
        }
    }

    componentDidMount() {
        // this.props.location.record.CheckDetails.forEach((detail,index) => {
        //     axios.get('/checkRecord/'+detail.Item_No, {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': 'Bearer ' + localStorage.getItem('token')
        //         }
        //     }).then(res=>{
        //         this.setState({
        //             CheckDetails: 
        //                 this.state.CheckDetails.map((d,i)=>{
        //                     if(i===index) {
        //                         return {...d, list:res.data.data}
        //                     } else {
        //                         return d
        //                     }
        //                 })
        //         });
        //     });
        // });
    }

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
                        {this.state.CheckTime}
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
                            {this.state.CheckDetails ? this.state.CheckDetails.map(detail=><ListCollapse detail={detail} key={this.state.CR_ID+'_'+detail.Seq_No} />) : ''}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withRouter(List);