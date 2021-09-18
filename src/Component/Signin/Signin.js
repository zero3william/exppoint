import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import Member from './Member/Member'
import './Signin.css';

import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
    const history = useHistory();
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [token, setToken] = useState('');
    const [login, setLogin] = useState(false);

    useEffect(() => {
        if (login === true) {
            localStorage.setItem('token', token)
            history.push(`/index`)
        }
    }, [login]);


    const forgetPasswordRequest = () => {
        console.log("forget!!!!!")
    }

    const sendLoignRequest = () => {
        const payload = {
            "Account": id,
            "Password": pw
        }
        axios.post('/member/login', payload)
            .then(res => { 
                if (res.data.status === "OK") {
                    setToken(res.data.data)
                    setLogin(true)
                }
            })
            .catch(err => {
                if (err.response && err.respornse.data.status === "NG") {
                    alert("帳號密碼錯誤")
                    // alert(err.response.data.message)
                    setLogin(false)
                } else {
                    alert("伺服器沒有回應")
                }
            })
        
    }

    const inputId = (e) => {
        setId(e.target.value)
        console.log(id)
    }

    const inputPw = (e) => {
        setPw(e.target.value)
        console.log(pw)
    }

    return (
        <Row id="content" className="m-0 p-0 d-flex justify-content-center">
            {/* Top of Article */}
            <div id="top-article">
                <Col id="signinBG" className="round-5">
                    <div className="text-center mt-4 mb-4 lh-base fs-1 title_signin">登入</div>
                    <Row className="d-flex justify-content-center lh-base fs-5 my-2">
                        <Col xs={4} className="p-0">
                            <div className="d-flex justify-content-end accNpw mt-2 ms-1 px-sm-2">帳號：</div>
                        </Col>
                        <Col xs={8} className="p-0">
                            <input type="text" className="text-center" placeholder="請輸入帳號" name="id" onChange={inputId} ></input>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center lh-base fs-5 my-4">
                        <Col xs={4} className="p-0">
                            <div className="d-flex justify-content-end accNpw mt-2 ms-1 px-sm-2">密碼：</div>
                        </Col>
                        <Col xs={8} className="p-0">
                            <input type="password" className="text-center" placeholder="請輸入密碼" name="pw" onChange={inputPw}></input>
                        </Col>
                    </Row>
                    <Row className="justify-content-end mx-5" onClick={forgetPasswordRequest} >忘記密碼?</Row>
                    <Row>
                        <Col className="text-center mt-4 mb-3">
                            <Button type="submit" className="btn fs-4 p-1" onClick={sendLoignRequest}>確認</Button>
                        </Col>
                    </Row>
                </Col>
            </div>
        </Row>
    );

}

export default Signin;