import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import App from './components/App';
import Books from './components/Books';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Contact from './components/Contact';
import Statement from './components/Statement';
import Vitae from './components/Vitae'
import Biography from './components/Biography'

window.React = React;

ReactDOM.render(
    <Router>
      <Route path="/" component={App}>
        <Route path="/books" component={Books}/>
        <Route path="/gallery" component={Gallery}/>
        <Route path="/events" component={Events}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/statement" component={Statement}/>
        <Route path="/vitae" component={Vitae}/>
        <Route path="/biography" component={Biography}/>
      </Route>
    </Router>
    , document.getElementById('content')
);