import React, { Component } from "react";
import { render } from "react-dom";
import { Navbar, Grid, Row, Col, Image, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import './Home.scss';
import comingSoon from '../images/coming-soon.jpg';
import Header from './Header/Header.jsx';

const images = [
    {
        original: comingSoon,
        thumbnail: comingSoon,
    },
    {
        original: comingSoon,
        thumbnail: comingSoon
    },
    {
        original: comingSoon,
        thumbnail: comingSoon
    }
];

export default class Home extends Component {
    render() {
        return (
            <div className="parent-component">
                <Header />
                <Grid fluid={true}>
                    <Row>
                        <Col lg={3} md={6} sm={3}>
                        </Col>
                        <Col lg={12} md={12} sm={12} className="image-carousal">
                            <ImageGallery
                                items={images}
                                showThumbnails={false}
                            />
                        </Col>
                        <Col lg={3} md={6} sm={3}>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}