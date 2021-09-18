/* Import Packages */

import React, { Component } from 'react';
import { Col, Row, Button, Modal, CloseButton } from 'react-bootstrap';


/* Import CSS */
import 'bootstrap/dist/css/bootstrap.min.css'
import './Member.css'
/* Import Images */
import g_edit from '../../../assets/images/g-edit.png'
import w_user from '../../../assets/images/w-user.png';

class Member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClick: false,
            width: "220px",
            showModal: false
        };

    }
    setShow() {
        this.setState({
            showModal: true
        })
    }
    setClose() {
        this.setState({
            showModal: false
        })

    }


    render() {
        const _isClick = this.props.isClick,
            _Name = this.props.Name,
            _Account = this.props.Account;
        return (
            <Col xs={1} className="cube p-sm-2 mb-sm-0 mb-2 mt-sm-2 me-2 ms-0 
            w-sm-auto justify-content-center align-self-center"
                style={{ width: _isClick ? "400px" : "220px" }}
                onClick={this.props.onClick}>

                <Row className="justify-content-center align-self-center fs-4">

                    <Col className={_isClick ? "d-block" : "d-none"}></Col>
                    <Col className="fs-4 text-center myname">{_Name}</Col>

                    {/* edit button */}
                    <Col className={_isClick ? "d-block" : "d-none"}>
                        <Button className="editbtn" data-bs-toggle="modal" data-bs-target="#editModal">
                            <img className="edit d-flex align-self-center" src={g_edit} alt="g-edit" />
                        </Button>
                    </Col>

                </Row>

                {/* pic & detail */}
                <div className="d-flex justify-content-around">
                    {/* user pic */}
                    <div className="picsrow">
                        <img className="pic mx-auto" src={w_user} alt="w-user" />
                    </div>
                    {/* detail */}
                    <div className={"detail flex-column justify-content-around " + (_isClick ? "active" : "")}>
                        {/* account */}
                        <div className="d-flex fs-5">
                            <div className="text-end"> 帳號：</div>
                            <div>{_Account}</div>
                        </div>
                        {/* password */}
                        <div className="d-flex fs-5">
                            <div className="text-end"> 密碼：</div>
                            <div> **************</div>
                        </div>
                    </div>
                </div>
                {/* button */}
                <div className={"justify-content-center mt-2 btns " + (_isClick ? "active" : "")}>

                    <Button className="fs-6 btn py-1 mx-1" data-bs-toggle="modal" data-bs-target="#removeModal"
                        onClick={this.setShow.bind(this)}>移除管理者</Button>
                    <Button className="fs-6 btn py-1 mx-1" data-bs-toggle="modal" data-bs-target="#delModal">刪除</Button>
                </div>
                <Modal
                    id={"removeModal"}
                    size={"lg"}
                    show={this.state.showModal}
                    onHide={this.setClose.bind(this)}
                    backdrop="static"
                    keyboard={false}
                    className="modal fade"
                >
                    <Modal.Header>
                        model
                        <CloseButton onClick={this.setClose.bind(this)}></CloseButton>
                    </Modal.Header>
                    <Modal.Body>
                        123
                    </Modal.Body>
                </Modal>

                
            </Col>
        );
    }
}

export default Member;
