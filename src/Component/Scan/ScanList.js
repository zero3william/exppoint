import React, { useState } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import w_list from '../../assets/images/w-list.png'

function ScanList(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {data}=props

    return (
        <>
            <button id="done" type="button" className="fs-4 btn py-1 px-2" onClick={handleShow}>
                <img alt='' id="listbtn" src={w_list} />
            </button>
            <Modal show={show} onHide={handleClose} style={{ backgroundColor: "rgba(0,0,0,0.7)" }} id="scan_modal">
                <div style={{ background: "#8FC6CD" }}>
                    <Modal.Header closeButton className="modal-header justify-content-center p-2" style={{ border: "none" }}>
                    </Modal.Header>
                    <Row className="fs-3">
                        <Col xs={12} sm className="text-center text-white">品名</Col>
                        <Col className="text-center text-white sm_close">到期日</Col>
                        <Col className="text-center text-white sm_close">數量</Col>
                    </Row>
                    <Modal.Body id="modal_list" className="p-0">
                    {data ? data.map(item=>
                        <Row className="classdetails mx-2 my-1" key={item.Item_No}>
                            <Col className="text-center">{item.Item_Name}</Col>
                            <Col className="text-center sm_close">{item.ExpDate}</Col>
                            <Col className="text-center sm_close">{item.Amount}</Col>
                            <div className="sm_opem">
                                <Row className="" style={{backgroundColor:"#97c5cb"}}>
                                    <Col className="text-center text-white">到期日</Col>
                                    <Col className="text-center text-white">數量</Col>
                                </Row>
                                <Row className="classdetails mx-2 my-1">
                                    <Col className="text-center">{item.ExpDate}</Col>
                                    <Col className="text-center">{item.Amount}</Col>
                                </Row> 
                            </div>
                        </Row>
                    ) : ''}
                    </Modal.Body>
                </div>
            </Modal>
        </>
    );
}

export default ScanList;