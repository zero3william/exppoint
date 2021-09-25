import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Collapse } from 'reactstrap';

import g_triangle from '../../assets/images/g-triangle.png';
import g_triangleUp from '../../assets/images/g-triangleUP.png';

const CollapseTemplate = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    let main = props.data;
    const mainTitle = main.MainType;
    let mainSum = 0;
    let subArr = [];
    main.SubTypes.forEach(sub => {
        const subTitle = sub.SubType;
        let subSum = 0;
        sub.Items.forEach(item=>{
            const name = item.Item_Name;
            item.Records.forEach(record=>{
                const amount = record.Amount;
                mainSum += amount;
                subSum += amount;
            });
        });
        subArr.push({title:subTitle,amount:subSum});
    });

    subArr.sort((a,b)=> a.amount > b.amount ? -1 : 0);

    return (
        <div>
            <div className="items fs-4 mx-2 mb-1">
                <Row className="d-flex py-1 " type="button" onClick={toggle}>
                    <Col xs={1}><img alt='' className="modelpic" src={isOpen ? g_triangleUp : g_triangle} /></Col>
                    <Col className="name ps-4">{mainTitle}</Col>
                    <Col className="num text-end">{mainSum}</Col>
                </Row>
                <Collapse isOpen={isOpen}>
                    <div className="Statistics_details">
                        {subArr.map(data=>
                        <Row className="classitems  py-1 my-1 mx-1" key={data.title}>
                            <Col className="name ps-4">{data.title}</Col>
                            <Col className="num text-end">{data.amount}</Col>
                        </Row>    
                        )}
                    </div>
                </Collapse>
            </div>
        </div>
    )
};

export default CollapseTemplate;