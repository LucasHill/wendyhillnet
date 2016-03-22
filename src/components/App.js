import React from 'react';
import { Link }  from 'react-router';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';

import Navbar from 'react-bootstrap/lib/Navbar'

import Nav from './Nav'

export default React.createClass({
    render() {
        function jumbo() {
            return(
                <img className="jumbotron-img" src="./images/jumbotron.png"/>
            )
        }
        return (
            <div className="wrapper">
                <section>
                    <div className="container-fluid">
                        <Nav />
                        <hr/>
                        <Panel>
                            {this.props.children || jumbo()}
                        </Panel>
                     </div>
                </section>
            </div>
        )
    }
});