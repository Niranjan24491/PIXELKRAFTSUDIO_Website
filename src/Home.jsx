import React, {Component} from "react";
import {render, ReactDOM} from "react-dom";
import {Grid, Row, Col} from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import './Home.scss';
import image1 from '../images/IMAGE1.jpg';
import image2 from '../images/IMAGE2.jpg';
import image3 from '../images/IMAGE3.jpg';
import image4 from '../images/IMAGE4.jpg';
import Header from './Header/Header.jsx';
import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx';
import Gallery from './Gallery/Gallery.jsx';

const LOREMText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i" +
        "ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru" +
        "d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut" +
        "e irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n" +
        "ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui" +
        " officia deserunt mollit anim id est laborum.";

const images = [
    {
        original: image1,
        thumbnail: image1
    }, {
        original: image2,
        thumbnail: image2
    }, {
        original: image3,
        thumbnail: image3
    }, {
        original: image4,
        thumbnail: image4
    }
];

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerClass: "header",
            renderHome: true,
            renderAbout: false,
            displayClassHome: "display-class-home",
            displayClassAbout: "display-none"
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        const scrollTop = event.srcElement.body.scrollTop;
        if (scrollTop > 50) {
            this.setState({headerClass: 'transformed-header'});
        } else if (scrollTop < 50) {
            this.setState({headerClass: 'header'});
        }

    }

    handleHeaderClick = (e, location) => {
        switch (location) {
            case 'about':
                {
                    this.setState({displayClassHome: 'display-none', displayClassAbout: 'display-class-about'});
                }
        }
    }
    render() {
        return (
            <div className="parent-component">
                <Header
                    navigationClick={this.handleHeaderClick}
                    headerClass={this.state.headerClass}
                    autoPlay={true}/>
                <Grid fluid={true} className={this.state.displayClassHome}>
                    <Row>
                        <Col lg={12} md={12} xs={12} className="zero-padding">
                            <ImageGallery items={images} showThumbnails={false}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12} md={12} xs={12} className="zero-padding">
                            <aside className="aside-text">
                                <h4>WE LOVE LIFE, PEOPLE AND MOST OF US EACH OTHER.</h4>
                                <p>{LOREMText}</p>
                            </aside>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12} md={12} xs={12} className="zero-padding">
                            <aside className="aside-text">
                                <h2>COMING SOON</h2>
                            </aside>
                        </Col>
                    </Row>
                </Grid>
                <Grid fluid={true} className={this.state.displayClassAbout}>
                    <Row>
                        <Col lg={12} md={12} xs={12} className="zero-padding">
                            <aside className="aside-text">
                                <h4>ABOUT US</h4>
                                <p>{LOREMText}</p>
                            </aside>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}