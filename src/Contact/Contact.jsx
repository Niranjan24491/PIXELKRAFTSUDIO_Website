import React, { Component } from "react";
import { render } from "react-dom";
import { Image, Row, Col, Jumbotron } from 'react-bootstrap';
// import AmitImage from '../../images/amit.jpg';
import './Contact.scss'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col lg={3} md={3} xs={3} lgOffset={3} className="contact-pic" style={{ 'z-index': '1' }}>
                        {/* <Image src={AmitImage} circle responsive /> */}
                    </Col>
                    <Col lg={4} md={4} xs={4} lgPull={1} className="contact-details">
                        <h3>PIXEL KRAFT STUDIO</h3>
                        <h5>AMIT KUMAR GUPTA</h5>
                        <h6>Bangalore, Karnataka</h6>
                        <h6>MOB: +91 - 88842 11169</h6>
                        <h6>@: info@pixelkraftstudio.com</h6>
                    </Col>
                </Row>
                <Row className="contact-info">
                    <Jumbotron>
                        <h1>Let's work together</h1>
                        <h5>
                            I'm currently accepting new projects and would love to hear about yours.
                            Please take a few minutes to tell me about it.
                        </h5>
                    </Jumbotron>
                </Row>
            </div>
        )
    }
}