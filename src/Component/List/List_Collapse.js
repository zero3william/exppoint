import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Collapse } from 'reactstrap';

const ListCollapse = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const {detail} = props;

    return <div className="">
        <Row className="listitem mx-2 my-2 fs-3" type="button" onClick={toggle}>
            <Col className="justify-content-center text-center">{detail.Item_Name}</Col>

            <Collapse isOpen={isOpen} className="m-0 p-0">
                <div className="ListNsearch_details">
                    <Row className="p-0 m-0" style={{ backgroundColor: "#8BCDD4" }}>
                        <Col className="text-center text-white"> 到期日</Col>
                        <Col className="text-center text-white"> 數量</Col>
                    </Row>
                    <Row className={"p-0 m-0" + (detail.Status==='未下架' ? ' error_list_item' : '')}>
                        <Col className="text-center">{detail.ExpDate}</Col>
                        <Col className="text-center">{detail.Amount}</Col>
                    </Row>
                </div>
            </Collapse>
        </Row>
    </div>
}



export default ListCollapse;