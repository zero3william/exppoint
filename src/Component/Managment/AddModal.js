import React, { useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function AddModal(props) {
    const [show, setShow] = useState(false);
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {update} = props;

    const handleAdd = () => {
        axios.post('/member', {
            "Account":account,
            "Password":password,
            "Username":username
        }, {
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        }).then(res=>{
            update();
            handleClose();
        });
    }

    return (
        <>
            <Button id="add_member" className="fs-5 py-1 px-2" onClick={handleShow}>
                <span>新增成員 </span>
            </Button>

            <Modal show={show} onHide={handleClose} id="index_modal" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
                <Modal.Header className="modal-header justify-content-center" style={{ background: "#8FC6CD" }}>
                    <Modal.Title className="text-white">新增職員</Modal.Title>
                </Modal.Header>
                <Modal.Body className="justify-content-center fs-5">
                    <Row className="mt-3">
                        <Col xs={12} sm={4} className="d-flex justify-content-center align-self-center">使用者名稱：</Col>
                        <Col>
                            <input type="text" className="text-center w-100" placeholder="輸入使用者名稱" value={username} onChange={(e)=>{setUsername(e.target.value);}} />
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xs={12} sm={4} className="d-flex justify-content-center align-self-center">帳號：</Col>
                        <Col >
                            <input type="text" className="text-center w-100" placeholder="輸入帳號" value={account} onChange={(e)=>{setAccount(e.target.value);}} />
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xs={12} sm={4} className="d-flex justify-content-center align-self-center">密碼：</Col>
                        <Col>
                            <input type="text" className="text-center w-100" placeholder="輸入密碼" value={password} onChange={(e)=>{setPassword(e.target.value);}} />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-around mb-2">
                    <Button variant="secondary" onClick={handleClose} className="cancel btn py-1 px-3 mx-1">
                        取消
                    </Button>
                    <Button variant="primary" onClick={handleAdd} className="confirm btn py-1 px-3 mx-1">
                        新增
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddModal;