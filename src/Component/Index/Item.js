import React, { useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Item() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div class="item" variant="primary" onClick={handleShow}>
                <div className="itemName text-center">統一陽光黃金豆漿</div>
                <Row className="detailTitle text-center">
                    <Col>到期日</Col>
                    <Col>數量</Col>
                </Row>
                <Row className="detailTitle text-center">
                    <Col>2021-07-01</Col>
                    <Col>6</Col>
                </Row>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-header justify-content-center" style={{background:"#8FC6CD"}}>
                    <Modal.Title className="text-white">是否已下架？</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-block d-sm-flex my-3">
                        <div className="d-flex justify-content-center justify-sm-content-center">品名<span
                            className="d-none d-sm-block">：</span></div>
                        <div className="text-center text-sm-start">統一無加糖高纖豆漿</div>
                    </div>
                    <div className="d-block d-sm-flex my-3">
                        <div className="d-flex justify-content-center justify-sm-content-center">到期日<span
                            className="d-none d-sm-block">：</span></div>
                        <div className="text-center text-sm-start">2021-07-02</div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-around mb-2">
                    <Button variant="secondary" onClick={handleClose} className="cancel btn py-1 px-3 mx-1">
                        未下架
                    </Button>
                    <Button variant="primary" onClick={handleClose} className="confirm btn py-1 px-3 mx-1">
                        已下架
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Item;