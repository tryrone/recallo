import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './tablehead.scss';

export default class TableHead extends Component {
    render() {
        return (
            <div className="tableheadWrap">
                <Row xl={6} className="row-me">
                    <Col className="callDa">
                        <p className="tim">Call date & time</p>
                    </Col>
                    <Col className="callDa">
                        <p className="tim">Personnel</p>
                    </Col>
                    <Col className="callDa">
                        <p className="tim">Call duration</p>
                        <i style={{color:"#777777"}} className="fas fa-caret-down"></i>
                    </Col>
                    <Col className="callDa hide">
                        <p className="tim">Call status</p>
                        <i style={{color:"#777777"}} className="fas fa-caret-down"></i>
                    </Col>
                    <Col className="callDa hide">
                        <p className="tim">Profile category</p>
                        <i style={{color:"#777777"}} className="fas fa-caret-down"></i>
                    </Col>
                    <Col className="callDa hide">
                        <p className="tim">Action</p>
                    </Col>
                </Row>
            </div>
        )
    }
}
