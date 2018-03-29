import React, {Component} from "react";
import {render, ReactDOM} from "react-dom";
import {Grid, Row, Col} from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import './Home.scss';
import image1 from '../images/Home/Home1.png';
import image2 from '../images/Home/Home2.png';
import image3 from '../images/Home/Home3.jpg';
import image4 from '../images/Home/Home4.jpg';
import image5 from '../images/Home/Home5.jpg';
import image6 from '../images/Home/Home6.jpg';
import image7 from '../images/Home/Home7.jpg';
import image8 from '../images/Home/Home8.jpg';
import Header from './Header/Header.jsx';
import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx';
import Gallery from './Gallery/Gallery.jsx';

const LOREMText = "Photography is the story we fail to put into words.When words become unclear, we" +
        " shall focus with photographs. When images become inadequate, we shall be conten" +
        "t with silence.Photography is a way of feeling, of touching, of loving. What we " +
        "have caught on film is captured forever. It remembers little things, long after " +
        "you have forgotten everything.To us, photography is an art of observation. It’s " +
        "about finding something interesting in an ordinary place. We’ve found it has lit" +
        "tle to do with the things you see and everything to do with the way you see them" +
        ".A tear contains an ocean. We as photographers are aware of the tiny moments in " +
        "a persons life that reveal greater truths.Walk up to us or talk to us and we sha" +
        "ll show you another world with our pictures . . .";

const images = [
    {
        original: image1
    }, {
        original: image2
    }, {
        original: image3
    }, {
        original: image4
    }, {
        original: image5
    }, {
        original: image6
    }, {
        original: image7
    }, {
        original: image8
    }
];

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerClass: "header-parent",
            renderHome: true,
            renderAbout: false,
            displayClassHome: "display-class-home",
            displayClassAbout: "display-none",
            displayClassPhotos: "display-none",
            displayClassContact: "display-none",
            parentClass: 'parent-component',
            currentPage: '',
            footer: 'footer'
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
            if (this.state.currentPage === 'photos') {
                this.setState({headerClass: 'transformed-header-parent black-class'});
            } else {
                this.setState({headerClass: 'transformed-header-parent'});
            }

        } else if (scrollTop < 50) {
            if (this.state.currentPage === 'photos') {
                this.setState({headerClass: 'header-parent black-class'});
            } else {
                this.setState({headerClass: 'header-parent'});
            }
        }
    }

    handleHeaderClick = (e, location) => {
        window.scrollTo(0, 0);
        this.setState({parentClass: 'parent-component', currentPage: location, headerClass: 'header-parent', footer: 'footer'})
        switch (location) {
            case 'logo':
                {
                    this.setState({
                        displayClassHome: 'display-class-home',
                        displayClassAbout: 'display-none',
                        displayClassPhotos: 'display-none',
                        displayClassContact: 'display-none'
                    });
                    break;
                }
            case 'about':
                {
                    this.setState({
                        displayClassHome: 'display-none',
                        displayClassPhotos: 'display-none',
                        displayClassContact: 'display-none',
                        displayClassAbout: 'display-class-about'
                    });
                    break;
                }
            case 'photos':
                {
                    this.setState({
                        displayClassHome: 'display-none',
                        displayClassPhotos: 'display-class-photos',
                        displayClassContact: 'display-none',
                        displayClassAbout: 'display-none',
                        parentClass: 'parent-component black-class',
                        headerClass: `${this.state.headerClass} black-class`,
                        footer: `${this.state.footer} black-class`
                    });
                    break;
                }
            case 'contactUs':
                {
                    this.setState({
                        displayClassHome: 'display-none',
                        displayClassPhotos: 'display-none',
                        displayClassContact: 'display-class-contact',
                        displayClassAbout: 'display-none'
                    });
                    break;
                }
        }
    }
    render() {
        return (
            <div>
                <div className={this.state.parentClass}>
                    <Header
                        navigationClick={this.handleHeaderClick}
                        headerClass={this.state.headerClass}
                        autoPlay={true}/>
                    <Grid fluid={true} className={this.state.displayClassHome}>
                        <Row>
                            <Col lg={12} md={12} xs={12} className="zero-padding">
                                <ImageGallery items={images} showThumbnails={false} autoPlay={true}/>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={12} md={12} xs={12} className="zero-padding">
                                <aside className="aside-text">
                                    <h4>WE LOVE LIFE, PEOPLE AND MOST OF US EACH OTHER.</h4>
                                    <div className="underline-div"></div>
                                    <p>{LOREMText}</p>
                                </aside>
                            </Col>
                        </Row>
                    </Grid>
                    <Grid fluid={true} className={this.state.displayClassAbout}>
                        <Row>
                            <Col lg={12} md={12} xs={12} className="zero-padding">
                                <aside className="aside-text">
                                    <h4>ABOUT US</h4>
                                    <div className="underline-div"></div>
                                </aside>
                            </Col>
                        </Row>
                        <About/>
                    </Grid>
                    <Grid fluid={true} className={this.state.displayClassPhotos}>
                        <Row>
                            <Col lg={12} md={12} xs={12} className="zero-padding">
                                <aside className="aside-text">
                                    <h4>PORTFOLIO</h4>
                                    <div className="underline-div"></div>
                                </aside>
                            </Col>
                        </Row>
                        <Gallery/>
                    </Grid>
                    <Grid fluid={true} className={this.state.displayClassContact}>
                        <Row>
                            <Col lg={12} md={12} xs={12} className="zero-padding">
                                <aside className="aside-text">
                                    <h4>CONTACT US</h4>
                                    <div className="underline-div"></div>
                                </aside>
                            </Col>
                        </Row>
                        <Contact/>
                    </Grid>
                </div>
                <footer class={this.state.footer}>
                    <span>COPYRIGHT @ PIXELKRAFT STUDIO 2018</span>
                </footer>
            </div>
        )
    }
}