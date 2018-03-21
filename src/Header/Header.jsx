import React, { Component } from "react";
import { render } from "react-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">Pixel Kraft Studio</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        Home
                    </NavItem>
                    <NavDropdown eventKey={3} title="Gallery" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1} href="#">Pre-wedding</MenuItem>
                        <MenuItem eventKey={3.2} href="#">Wedding</MenuItem>
                        <MenuItem eventKey={3.3} href="#">Post-Wedding</MenuItem>
                        <MenuItem eventKey={3.4} href="#">Model Shoot</MenuItem>
                        <MenuItem eventKey={3.5} href="#">Baby Shower</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={2} href="#">
                        About Us
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Contact Us
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}