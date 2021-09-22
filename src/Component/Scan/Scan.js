import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Scan.css';
import ScanList from './ScanList.js';

class Scan extends Component {

    render() {
        return (
            <div id="Scan_content" className="m-0 p-0 container-fluid">
                {/* main */}
                <video>

                </video>

                {/* footer */}
                <Row id="footer" className="fixed-bottom">
                    <Col xs={4} className="d-flex justify-content-center align-items-center">
                        <Link to="/Scanleave" style={{ textDecoration: 'none' }} className="my-auto">
                            <button id="done" type="button" className="fs-4 btn py-1 px-2">
                                完成
                            </button>
                        </Link>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center text-white fs-3">
                        掃描中
                    </Col>
                    {/* ScanList */}
                    <Col xs={4} className="d-flex justify-content-center align-items-center">
                        {/* <button id="done" type="button" className="fs-4 btn py-1 px-2">
                            <img id="listbtn" src={w_list} />
                        </button> */}
                        <ScanList />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Scan;