import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import w_search from '../../assets/images/w-search.png'

function Search_Modal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className="search p-2" onClick={handleShow}>
                <img alt='' id="searchpic" src={w_search} />
            </button>

            <Modal show={show} onHide={handleClose} style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
                <Modal.Header className="modal-header justify-content-center" style={{background:"#8FC6CD"}}>
                    <Modal.Title className="text-white">逼近品查詢</Modal.Title>
                </Modal.Header>
                <Modal.Body className="justify-content-center">
                    <input type="text" className="d-flex text-center searchinput" placeholder="請輸入品名或貨號" />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-around mb-2">
                    <Button variant="secondary" onClick={handleClose} className="cancel btn py-1 px-3 mx-1">
                        取消
                    </Button>
                    <Button variant="primary" onClick={handleClose} className="confirm btn py-1 px-3 mx-1">
                        查詢
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Search_Modal;