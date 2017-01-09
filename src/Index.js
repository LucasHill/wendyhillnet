import React from 'react/lib/React';
import ReactDOM from 'react-dom/lib/ReactDOM';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import App from './components/App';
import Books from './components/Books';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Contact from './components/Contact';
import Statement from './components/Statement';
import Vitae from './components/Vitae'

import AppContainer from 'react-hot-loader/lib/AppContainer';
window.React = React;

let render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Router>
        <Route path="/" component={Component}>
          <Route path="/books" component={Books}/>
          <Route path="/gallery" component={Gallery}/>
          <Route path="/events" component={Events}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/statement" component={Statement}/>
          <Route path="/vitae" component={Vitae}/>
        </Route>
      </Router>
    </AppContainer>, 
    document.getElementById('content')
  )
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewApp = require('./components/App').default;
    render(NewApp);
  });
}