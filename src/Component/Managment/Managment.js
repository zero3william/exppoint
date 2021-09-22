import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import Member from './Member/Member'
import './Managment.css';
import AddModal from './AddModal.js'

import g_button from '../../assets/images/g-button.png'

import MemberList from '../../assets/json/member.json'
class Managment extends Component {

    constructor(props) {
        super(props);

        this.state = {
            memberList: [],
            adminCollection: [],
            employeeCollection: []

        }
    }
    componentDidMount() {
        const memberList = [], adminCollection = [], employeeCollection = [];
        MemberList.forEach((_member, _key) => {
            const object = {
                "key": _key,
                "Account": _member.Account,
                "Username": _member.Username,
                "Role": _member.Role,
                "isClick": false
            };
            memberList.push(object);

            const component =
                <Member
                    key={_key}
                    Account={_member.Account}
                    Name={_member.Username}
                    onClick={() => {
                        this.onClickHandler(_key)
                    }}
                    isClick={memberList[_key].isClick}
                >
                </Member>;

            _member.Role === "admin" ?
                adminCollection.push(component) :
                employeeCollection.push(component);

            this.setState({
                memberList: memberList,
                adminCollection: adminCollection,
                employeeCollection: employeeCollection
            });
        });
    }


    onClickHandler(_key) {

        const memberList = this.state.memberList, adminCollection = [], employeeCollection = [];

        // ALL CLEAN

        memberList.forEach((element, index) => {
            if (_key === index)
                element.isClick = !element.isClick
            else if (element.isClick !== false)
                element.isClick = false;

        })


        memberList.forEach((_member, index) => {
            const component =
                <Member
                    key={_member.key}
                    Account={_member.Account}
                    Name={_member.Username}
                    onClick={() => {
                        this.onClickHandler(index)
                    }}
                    isClick={_member.isClick}
                >
                </Member>;

            _member.Role === "admin" ?
                adminCollection.push(component) :
                employeeCollection.push(component);

            this.setState({
                memberList: memberList,
                adminCollection: adminCollection,
                employeeCollection: employeeCollection
            });
        });
    }





    render() {

        return (

            <div id="Managment_content" className="m-0 p-0 container-fluid">
                {/* top */}
                <Row className="topd-flex lh-base align-items-center px-4 py-4 px-sm-5">
                    <Col xs={1} className="d-flex justify-content-center">
                        <Link to="/index" style={{ textDecoration: 'none' }} className="my-auto">
                            <img id="back" src={g_button} alt="back" />
                        </Link>
                    </Col>
                    <Col className="title me-sm-5 me-1 py-1">
                        <Row>
                            <Col className="align-self-center d-flex fs-2 text-start">人員管理</Col>
                            <Col className="align-self-center d-flex justify-content-end mx-1">
                                {/* 新增成員 */}
                                <AddModal />

                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/* middle */}
                <div className="middle">
                    {/* 管理員 */}
                    <Row id="managment" className="mb-1 mb-sm-5 mt-1">
                        <Col xs={12} sm={1} className="headtxt d-flex justify-content-center mb-sm-0 mt-2 me-3 mb-2">
                            <div className="d-flex justify-content-center align-self-center fs-4 my-5">管理員</div>
                        </Col>
                        <Col>
                            <Row>
                                {/* Admin List */}
                                {this.state.adminCollection}
                            </Row>
                        </Col>

                    </Row>
                    {/* 員工 */}
                    <Row id="staff" className="mb-1 mb-sm-5 mt-1">
                        <Col xs={12} sm={1} className="headtxt2 d-flex justify-content-center mb-sm-5 mt-2 me-3 mb-2">
                            <div className="d-flex justify-content-center align-self-center fs-4 my-5">員工</div>
                        </Col>
                        <Col>
                            <Row>
                                {/* Employee List */}
                                {this.state.employeeCollection}
                            </Row>
                        </Col>

                    </Row>

                </div>
            </div>
        );
    }
}

export default Managment;