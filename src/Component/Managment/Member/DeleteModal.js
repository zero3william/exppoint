import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

function DeleteModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {Account,Name,update} = props

    const handleDelete = () => {
        axios.delete('/member/'+Account,{
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        }).then(res=>{
            update();
            handleClose();
        });
    }

    return (
        <>
            <Button className="fs-6 btn py-1 mx-1" onClick={handleShow}>
                刪除
            </Button>

            <Modal show={show} onHide={handleClose} id="index_modal" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
                <Modal.Header className="modal-header justify-content-center" style={{ background: "#8FC6CD" }}>
                    <Modal.Title className="text-white">刪除人員</Modal.Title>
                </Modal.Header>
                <Modal.Body className="justify-content-center text-center">
                    確定刪除<b>{Name}</b>嗎?

                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-around mb-2">
                    <Button variant="secondary" onClick={handleClose} className="cancel btn py-1 px-3 mx-1">
                        取消
                    </Button>
                    <Button variant="primary" onClick={handleDelete} className="confirm btn py-1 px-3 mx-1">
                        刪除
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteModal;