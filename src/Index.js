import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import App from './components/App';
import Test from './components/Test';
import Books from './components/Books';
import Gallery from './components/Gallery';

window.React = React;

ReactDOM.render(
    <Router>
      <Route path="/" component={App}>
        <Route path="/test" component={Test}/>
        <Route path="/books" component={Books}/>
        <Route path="/gallery" component={Gallery}/>
      </Route>
    </Router>
    , document.getElementById('content')
);