import React, { useState } from 'react';
import { Modal, Button, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

import g_edit from '../../assets/images/g-edit.png'
import g_triangle from '../../assets/images/g-triangle.png'
import g_triangleUP from '../../assets/images/g-triangleUP.png'
function ControlsEditModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div variant="primary" onClick={handleShow}>
                <img id="edit" src={g_edit} alt="g_edit" className="my-auto" />
            </div>

            <Modal show={show} onHide={handleClose} id="Controls_Modal" style={{backgroundColor:"rgba(0,0,0,0.7)"}}>

                <Modal.Body>
                    <div className="d-block d-sm-flex my-3">
                        <div className="justify-content-start justify-sm-content-center" style={{display: "inline"}}>類別：</div>
                        <div className="text-start text-sm-start" style={{display: "inline"}}>乳製品</div>
                    </div>
                    <div className="d-flex my-3 my-auto">
                        <Col xs={8} sm className="justify-content-start justify-sm-content-center my-auto">到期前天數：</Col>
                        <Col className="my-auto">
                            <input type="text" className="text-center w-75" value="3"/>
                        </Col>
                        <Col className="my-auto">
                            <div className="p-0 m-0"><button type="button" className="upNdown btn p-0">
                                <img alt='' className="modelpic" src={g_triangleUP} /></button>
                            </div>
                            <div className="p-0 m-0"><button type="button" className="upNdown btn p-0">
                                <img alt='' className="modelpic" src={g_triangle} /></button>
                            </div>
                        </Col>
                    </div>
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

export default ControlsEditModal;