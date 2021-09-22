import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import g_edit from '../../../assets/images/g-edit.png';

function Edit_Modal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="editbtn" onClick={handleShow}>
                <img className="edit d-flex align-self-center" src={g_edit} alt="g-edit" />
            </Button>

            <Modal show={show} onHide={handleClose} id="index_modal" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
                <Modal.Header className="modal-header justify-content-center" style={{ background: "#8FC6CD" }}>
                    <Modal.Title className="text-white">編輯職員名稱</Modal.Title>
                </Modal.Header>
                <Modal.Body className="justify-content-center">
                    <input type="text" className="d-flex text-center searchinput mx-auto" value="王小明" />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-around mb-2">
                    <Button variant="secondary" onClick={handleClose} className="cancel btn py-1 px-3 mx-1">
                        取消
                    </Button>
                    <Button variant="primary" onClick={handleClose} className="confirm btn py-1 px-3 mx-1">
                        確定
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Edit_Modal;