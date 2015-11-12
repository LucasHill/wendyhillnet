import React from 'react';
import { Link }  from 'react-router';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';

import Navbar from 'react-bootstrap/lib/Navbar'
import NavBrand from 'react-bootstrap/lib/NavBrand'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'

import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'

export default React.createClass({
    returnSomething(something) {
        //this is only for testing purposes. Check /test/components/App-test.js
        return something;
    },
    render() {
        function jumbo() {
            return(
                <Panel>
                <Jumbotron>
                    <img src="../images/jumbotron.png"/>
                </Jumbotron>
            </Panel>)
        }
        return (
            <div>
                <section>
                    <div className="container">

                        <Navbar>
                            <NavBrand><a href="#">Wendy Hill</a></NavBrand>
                            <Nav>
                                <NavDropdown title="About" id="basic-nav-dropdown">
                                    <LinkContainer to="/statement"><MenuItem>Art Statement</MenuItem></LinkContainer>
                                    <LinkContainer to="/biography"><MenuItem>Bio</MenuItem></LinkContainer>
                                    <LinkContainer to="/vitae"><MenuItem>Curriculum Vitae</MenuItem></LinkContainer>
                                </NavDropdown>
                                <LinkContainer to="/books"><NavItem>Books</NavItem></LinkContainer>
                                <LinkContainer to="/gallery"><NavItem>Gallery</NavItem></LinkContainer>
                                <LinkContainer to="/events"><NavItem>Events</NavItem></LinkContainer>
                                <LinkContainer to="/contact"><NavItem>Contact</NavItem></LinkContainer>
                                <NavItem href="http://www.wendyhill.net/blog">Blog</NavItem>
                                <NavItem href="http://www.instagram.com">Instagram</NavItem>
                            </Nav>
                        </Navbar>
                    {this.props.children || jumbo()}
                     </div>
                </section>
            </div>
        )
    }
});