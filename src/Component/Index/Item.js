import React, { useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function Item(props) {
    const [show, setShow] = useState(false);
    const [hidden, setHidden] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const disContinued = (CR_ID,Seq_No)=>{
        axios.patch(`/checkDetail/${CR_ID}/${Seq_No}`, null, {
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        }).then(res => {
            setShow(false);
            setHidden(true);
        })
        .catch(err => {
            alert('更新失敗')
            setShow(false)
        });
    }

    return (
        hidden===true ? <></> : 
        <>
            <div className="item" variant="primary" onClick={handleShow}>
                <div className="itemName text-center">{props.detail.Item_Name}</div>
                <Row className="detailTitle text-center">
                    <Col>到期日</Col>
                    <Col>數量</Col>
                </Row>
                <Row className="detailTitle text-center">
                    <Col>{props.detail.ExpDate}</Col>
                    <Col>{props.detail.Amount}</Col>
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
                        <div className="text-center text-sm-start">{props.detail.Item_Name}</div>
                    </div>
                    <div className="d-block d-sm-flex my-3">
                        <div className="d-flex justify-content-center justify-sm-content-center">到期日<span
                            className="d-none d-sm-block">：</span></div>
                        <div className="text-center text-sm-start">{props.detail.ExpDate}</div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-around mb-2">
                    <Button variant="secondary" onClick={handleClose} className="cancel btn py-1 px-3 mx-1">
                        未下架
                    </Button>
                    <Button variant="primary" onClick={()=>{disContinued(props.detail.CR_ID,props.detail.Seq_No);}} className="confirm btn py-1 px-3 mx-1">
                        已下架
                    </Button>
                </Modal.Footer>
            </Modal>
        </> 
    );
}

export default Item;