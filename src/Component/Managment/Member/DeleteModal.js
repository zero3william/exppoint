import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function DeleteModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    確定刪除<b>王小明</b>嗎?

                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-around mb-2">
                    <Button variant="secondary" onClick={handleClose} className="cancel btn py-1 px-3 mx-1">
                        取消
                    </Button>
                    <Button variant="primary" onClick={handleClose} className="confirm btn py-1 px-3 mx-1">
                        刪除
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteModal;