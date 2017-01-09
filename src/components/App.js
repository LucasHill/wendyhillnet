import React from 'react/lib/React';
import Link  from 'react-router/lib/Link';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';

import Navbar from 'react-bootstrap/lib/Navbar'

import Nav from './Nav'

import styles from '../styles/main.css';

export default React.createClass({
    render() {
        function jumbo() {
            return(
                <img className={styles.jumbotronImage} src={require('../images/jumbotron.png')}/>
            )
        }
        return (
            <div className={styles.wrapper}>
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