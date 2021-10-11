import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios'

function AddAdminModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {Account,update,Name} = props;

    const handleRole = () => {
        axios.patch('/member/role/'+Account, {"Role": 'admin'}, {
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        }).then(res=>{
            update();
            handleClose();
        });
    }

    return (
        <>
            <Button className="fs-6 btn py-1 mx-1" onClick={handleShow}>
                新增管理者
            </Button>

            <Modal show={show} onHide={handleClose} id="index_modal" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
                <Modal.Header className="modal-header justify-content-center" style={{ background: "#8FC6CD" }}>
                    <Modal.Title className="text-white">新增管理者</Modal.Title>
                </Modal.Header>
                <Modal.Body className="justify-content-center text-center">
                    確定將<b>{Name}</b>新增管理者身份嗎?

                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-around mb-2">
                    <Button variant="secondary" onClick={handleClose} className="cancel btn py-1 px-3 mx-1">
                        取消
                    </Button>
                    <Button variant="primary" onClick={handleRole} className="confirm btn py-1 px-3 mx-1">
                        新增
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddAdminModal;