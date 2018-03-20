import React, { Component } from "react";
import { render } from "react-dom";
import { Navbar, Grid, Row, Col, Image } from 'react-bootstrap';
import './Home.scss';
import comingSoon from '../images/coming-soon.jpg';

export default class Home extends Component {
    render() {
        return (
            <div className="parent-component">
                <Navbar inverse collapseOnSelect>
                    <h1>Pixel Kraft Studios</h1>
                </Navbar>
                <Grid fluid={true}>
                    <Row>
                        <Col lg={12} md={12} sm={12} className="coming-soon">
                            <Image src={comingSoon} responsive />;
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}