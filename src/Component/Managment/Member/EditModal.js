import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import g_edit from '../../../assets/images/g-edit.png';
import axios from 'axios';

function Edit_Modal(props) {
    const {Account,update,Name} = props;

    const [show, setShow] = useState(false);
    const [name, setName] = useState(Name);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleName = () => {
        axios.patch('/member/username/'+Account, {"Username": name}, {
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
        }).then(res=>{
            update();
            handleClose();
        });
    }


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
                    <input type="text" className="d-flex text-center searchinput mx-auto" value={name} onChange={(e)=>{setName(e.target.value);}} />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-around mb-2">
                    <Button variant="secondary" onClick={handleClose} className="cancel btn py-1 px-3 mx-1">
                        取消
                    </Button>
                    <Button variant="primary" onClick={handleName} className="confirm btn py-1 px-3 mx-1">
                        確定
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Edit_Modal;