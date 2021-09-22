import React, { useState } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import w_list from '../../assets/images/w-list.png'

function ScanList() {
    const [show, setShow] = useState(false);

    const handleClose1 = () => setShow(false);
    const handleShow1 = () => setShow(true);

    return (
        <>
            <button id="done" type="button" className="fs-4 btn py-1 px-2" onClick={handleShow1}>
                <img alt='' id="listbtn" src={w_list} />


            </button>

            <Modal show={show} onHide={handleClose1} style={{ backgroundColor: "rgba(0,0,0,0.7)" }} id="scan_modal">
                <div style={{ background: "#8FC6CD" }}>
                    <Modal.Header closeButton className="modal-header justify-content-center p-2" style={{ border: "none" }}>
                    </Modal.Header>
                    <Row className="fs-3">
                        <Col xs={12} sm className="text-center text-white">品名</Col>
                        <Col className="text-center text-white sm_close">到期日</Col>
                        <Col className="text-center text-white sm_close">數量</Col>
                    </Row>
                    <Modal.Body id="modal_list" className="p-0">
                        <Row className="classdetails mx-2 my-1">
                            <Col className="text-center">統一無加糖高纖豆漿</Col>
                            <Col className="text-center sm_close">2021-07-31</Col>
                            <Col className="text-center sm_close">12</Col>
                            <div className="sm_opem">
                                <Row className="" style={{backgroundColor:"#97c5cb"}}>
                                    <Col className="text-center text-white">到期日</Col>
                                    <Col className="text-center text-white">數量</Col>
                                </Row>
                                <Row className="classdetails mx-2 my-1">
                                    <Col className="text-center">2021-07-31</Col>
                                    <Col className="text-center ">12</Col>
                                </Row>
                            </div>
                        </Row>
                        <Row className="classdetails mx-2 my-1">
                            <Col className="text-center">統一無加糖高纖豆漿</Col>
                            <Col className="text-center sm_close">2021-07-31</Col>
                            <Col className="text-center sm_close">12</Col>
                            <div className="sm_opem">
                                <Row className="" style={{backgroundColor:"#97c5cb"}}>
                                    <Col className="text-center text-white">到期日</Col>
                                    <Col className="text-center text-white">數量</Col>
                                </Row>
                                <Row className="classdetails mx-2 my-1">
                                    <Col className="text-center">2021-09-03</Col>
                                    <Col className="text-center ">8</Col>
                                </Row>
                            </div>
                        </Row>
                    </Modal.Body>
                </div>
                {/* <Modal.Footer className="d-flex justify-content-around mb-2">
                    <Button variant="secondary" onClick={handleClose} className="cancel btn py-1 px-3 mx-1">
                        未下架
                    </Button>
                    <Button variant="primary" onClick={handleClose} className="confirm btn py-1 px-3 mx-1">
                        已下架
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}

export default ScanList;