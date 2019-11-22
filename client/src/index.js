import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Results from './containers/results';



const routing = (
    <Router>
      <div>
        <Switch> 
        <Route exact path="/" component={App} />
        <Route exact path="/results" component={Results} />
        {/* <Route component={Notfound} /> */}
        </Switch>
      </div>
    </Router>
  )

  ReactDOM.render(
    routing
    ,document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
