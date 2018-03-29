import React, {Component} from "react";
import {render} from "react-dom";
import p1 from '../../images/portfolio/p1.jpg';
import p2 from '../../images/portfolio/p2.jpg';
import p3 from '../../images/portfolio/p3.png';
import p4 from '../../images/portfolio/p4.jpg';
import p5 from '../../images/portfolio/p5.jpg';
import p6 from '../../images/portfolio/p6.jpg';
import p7 from '../../images/portfolio/p7.jpg';
import p8 from '../../images/portfolio/p8.jpg';
import p9 from '../../images/portfolio/p9.jpg';
import {Image, Row, Col} from 'react-bootstrap';
import './Gallery.scss';

const LOREMText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i" +
        "ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru" +
        "d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut" +
        "e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n" +
        "ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui" +
        " officia deserunt mollit anim id est laborum.";

export default class Gallery extends Component {

    renderImageTiles = (image) => {
        return (
            <Col lg={4} md={4} xs={12} className="zero-padding containers">
                <div class="item">
                    <Image src={image} responsive/>
                </div>
            </Col>
        )
    }
    render() {
        return (
            <Row className="gallery-container">   
                {this.renderImageTiles(p1)}
                {this.renderImageTiles(p2)}
                {this.renderImageTiles(p3)}
                {this.renderImageTiles(p4)}
                {this.renderImageTiles(p5)}
                {this.renderImageTiles(p6)}
                {this.renderImageTiles(p7)}
                {this.renderImageTiles(p8)}
                {this.renderImageTiles(p9)}
            </Row>
        )
    }
}