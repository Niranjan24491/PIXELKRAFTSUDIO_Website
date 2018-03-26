import React, { Component } from "react";
import { render } from "react-dom";
import { Row, Col } from 'react-bootstrap';
import './About.scss';

const LOREMText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export default class About extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col lg={5} md={5} xs={12}>

                    </Col>
                    <Col lg={7} md={7} xs={12} className="about-info">
                        <p>{LOREMText}</p>
                        <p>{LOREMText}</p>
                        <p>{LOREMText}</p>
                    </Col>
                </Row>
            </div>
        )
    }
}