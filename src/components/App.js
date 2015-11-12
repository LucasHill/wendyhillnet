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
                    <h1>Hello, wold!</h1>
                    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p><Button bsStyle="primary">Learn more</Button></p>
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
                                    <MenuItem eventKey="1">Art Statement</MenuItem>
                                    <MenuItem eventKey="2">Bio</MenuItem>
                                    <MenuItem eventKey="3">Curriculum Vitae</MenuItem>
                                </NavDropdown>
                                <LinkContainer to="/books"><NavItem>Books</NavItem></LinkContainer>
                                <NavItem href="http://www.wendyhill.net/blog">Blog</NavItem>
                                <LinkContainer to="/gallery"><NavItem>Gallery</NavItem></LinkContainer>
                            </Nav>
                        </Navbar>
                    {this.props.children || jumbo()}
                     </div>
                </section>
            </div>
        )
    }
});