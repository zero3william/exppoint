/* Import Packages */

import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';


/* Import CSS */
import 'bootstrap/dist/css/bootstrap.min.css'
import './Member.css'
// modal
import AddAdminModal from './AddAdminModal.js'
import RemoveAdminModal from './RemoveAdminModal.js'
import DeleteModal from './DeleteModal.js'
import EditModal from './EditModal.js'
/* Import Images */
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


    render() {
        const _isClick = this.props.isClick,
            _Name = this.props.Name,
            _Account = this.props.Account,
            _Role = this.props.Role,
            _update = this.props.update;
        return (
            <Col xs={1} className="cube p-sm-2 mb-sm-0 mb-2 mt-sm-2 me-2 ms-0 
            w-sm-auto justify-content-center align-self-center"
                style={{ width: _isClick ? "400px" : "220px", height: _isClick ? "150px" : "40px" }}
                onClick={this.props.onClick}>

                <Row className="justify-content-center align-self-center fs-4">

                    <Col className={_isClick ? "d-block" : "d-none"}></Col>
                    <Col className="fs-4 text-center myname">{_Name}</Col>

                    {/* edit button */}
                    <Col className={_isClick ? "d-block" : "d-none"}>
                        {/* 編輯職員名稱 */}
                        <EditModal  Account={_Account} update={_update} Name={_Name}/>
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
                    {/* 移除管理者 : 新增管理者 */}
                    { _Role==='admin' ? <RemoveAdminModal Account={_Account} update={_update} /> : <AddAdminModal Account={_Account} update={_update} />}
                    {/* 刪除 */}
                    <DeleteModal Account={_Account} update={_update} Name={_Name} />
                </div>


            </Col>
        );
    }
}

export default Member;
