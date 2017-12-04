import React, { Component } from 'react';
import {Navbar,NavItem, Nav} from 'react-bootstrap';
import './navigation.css';
const navbarInstance = (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">Student Connect</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
            <NavItem eventKey={1} href="/">Home</NavItem>
            <NavItem eventKey={2} href="#">Contact</NavItem>
        </Nav>
    </Navbar>
);
class Navigation extends Component {
    render(){
        return navbarInstance;
    }
}
export default Navigation;