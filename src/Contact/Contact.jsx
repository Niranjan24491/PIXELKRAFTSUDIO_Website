import React, {Component} from "react";
import {render} from "react-dom";
import {Image, Row, Col, Jumbotron, FormControl} from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';
import AmitImage from '../../images/AMIT.jpg';
import './Contact.scss'

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            emailId: '',
            mobile: '',
            eventDate: '',
            eventType: '',
            budget: '',
            description: ''
        }
    }

    handleTextChange = (value, type) => {
        switch (type) {
            case 'name':
                {
                    this.setState({name: value});
                    break;
                }
            case 'emailId':
                {
                    this.setState({emailId: value});
                    break;
                }
            case 'mobile':
                {
                    this.setState({mobile: value});
                    break;
                }
            case 'eventDate':
                {
                    this.setState({eventDate: value});
                    break;
                }
            case 'eventType':
                {
                    this.setState({eventType: value});
                    break;
                }
            case 'description':
                {
                    this.setState({description: value});
                    break;
                }
            case 'budget':
                {
                    this.setState({budget: value});
                    break;
                }
        }
    }
    render() {
        return (
            <div>
                <Row>
                    <Col lg={2} md={2} xs={2} lgOffset={4} className="contact-pic">
                        <Image src={AmitImage} className="profile-image" circle responsive/>
                    </Col>
                    <Col lg={4} md={4} xs={4} className="contact-details">
                        <h3>PIXEL KRAFT STUDIO</h3>
                        <h5>
                            <strong>AMIT KUMAR GUPTA</strong>
                        </h5>
                        <h6>Bangalore, Karnataka</h6>
                        <h6>
                            <strong>#</strong>: +91 - 88842 11169</h6>
                        <h6>
                            <strong>@</strong>: info@pixelkraftstudio.com</h6>
                    </Col>
                </Row>
                <Row className="contact-info">
                    <Jumbotron>
                        <h3>Let's work together</h3>
                        <div className="underline-div"></div>
                        <h5>
                            I'm currently accepting new projects and would love to hear about yours. Please
                            take a few minutes to tell me about it.
                        </h5>
                    </Jumbotron>
                </Row>
                <div className="contact-data">
                    <Row className="margin-class">
                        <Col lg={4} md={4} xs={12} lgOffset={2} className="contact-pic">
                            <span>Name:
                            </span>
                            <FormControl
                                type="text"
                                placeholder="Enter your name"
                                onChange={(e) => this.handleTextChange(e.target.value, 'name')}/>
                        </Col>
                        <Col lg={4} md={4} xs={4} className="contact-details">
                            <span>EmailID:
                            </span>
                            <FormControl
                                type="text"
                                placeholder="Enter your mail Id"
                                onChange={(e) => this.handleTextChange(e.target.value, 'emailId')}/>
                        </Col>
                    </Row>
                    <Row className="margin-class">
                        <Col lg={4} md={4} xs={12} lgOffset={2} className="contact-pic">
                            <span>Mobile #:
                            </span>
                            <FormControl
                                type="text"
                                placeholder="Enter your mobile number"
                                onChange={(e) => this.handleTextChange(e.target.value, 'mobile')}/>
                        </Col>
                        <Col lg={4} md={4} xs={4} className="contact-details">
                            <span>Budget:
                            </span>
                            <FormControl
                                type="text"
                                placeholder="Enter your budget"
                                onChange={(e) => this.handleTextChange(e.target.value, 'budget')}/>
                        </Col>
                    </Row>
                    <Row className="margin-class">
                        <Col lg={4} md={4} xs={12} lgOffset={2} className="contact-pic">
                            <span>Event Date:
                            </span>
                            <DatePicker onChange={(e) => this.handleTextChange(e, 'eventDate')}/>
                        </Col>
                        <Col lg={4} md={4} xs={4} className="contact-details">
                            <span>Event Type:
                            </span>
                            <DropdownButton title="Select" id="dropdown-size-medium" onSelect={(e) => this.handleTextChange(e, 'eventType')}>
                                <MenuItem eventKey="1">Pre-Wedding</MenuItem>
                                <MenuItem eventKey="2">Wedding</MenuItem>
                                <MenuItem eventKey="3">Post-Wedding</MenuItem>
                                <MenuItem eventKey="4">Baby Shower</MenuItem>
                                <MenuItem eventKey="2">Candid</MenuItem>
                                <MenuItem eventKey="3">Parties</MenuItem>
                                <MenuItem eventKey="4">Others</MenuItem>
                            </DropdownButton>
                        </Col>
                    </Row>
                    <Row className="margin-class">
                        <Col lg={8} md={8} xs={12} lgOffset={2} className="contact-pic">
                            <span>Description:
                            </span>
                            <FormControl
                                className="description-field"
                                type="text"
                                placeholder="Give us more details if any"
                                onChange={(e) => this.handleTextChange(e.target.value, 'description')}/>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}