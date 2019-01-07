import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import reducer from './reducer';
import store from './store';
import App from './App';
import './style/lib/animate.css';
import './style/antd/index.less';
import './style/index.less';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/dashboard/index" push />} />
        <Route path="/app" component={App} />
      </Switch>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
serviceWorker.register();