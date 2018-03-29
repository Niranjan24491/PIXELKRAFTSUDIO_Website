import React, { Component } from "react";
import { render } from "react-dom";
import './Header.scss';

export default class Header extends Component {

    render() {
        return (
            <div>
                <div className={`${this.props.headerClass}`}>
                    <div className="header-left" onClick={(e) => this.props.navigationClick(e, 'logo')}>
                        PIXEL KRAFT STUDIO
                    </div>
                    <div className="header-right">
                        <span onClick={(e) => this.props.navigationClick(e, 'about')}>ABOUT US</span>
                        <span onClick={(e) => this.props.navigationClick(e, 'photos')}>PORTFOLIO</span>
                        <span onClick={(e) => this.props.navigationClick(e, 'contactUs')}>CONTACT US</span>
                    </div>
                </div>
            </div>
        )
    }
}
