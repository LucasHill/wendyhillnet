import React from 'react';
import { Link }  from 'react-router';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';

import Navbar from 'react-bootstrap/lib/Navbar'

import Nav from './Nav'

export default React.createClass({
    returnSomething(something) {
        //this is only for testing purposes. Check /test/components/App-test.js
        return something;
    },
    render() {
        function jumbo() {
            return(

                <Jumbotron>
                    <img src="./images/jumbotron.png"/>
                </Jumbotron>
         )
        }
        return (
            <div>
                <section>
                    <div className="container">
                        <Nav />
                        <Panel>
                            {this.props.children || jumbo()}
                        </Panel>
                     </div>
                </section>
            </div>
        )
    }
});