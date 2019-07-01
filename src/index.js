import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from '@/components/App';
import Register from '@/components/Register';
import Login from '@/components/Login';
import UserMessage from '@/components/UserMessage';
import Search from '@/components/Search';
import Detail from '@/components/Detail';
import City from '@/components/City';
import * as serviceWorker from './serviceWorker';
import './main.scss';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path = '/register' component = { Register } />
      <Route path = '/login' component = { Login } />
      <Route path = '/userMessage' component = { UserMessage } />
      <Route path = '/search' component = { Search } />
      <Route path = '/city' component = { City } />
      <Route path = '/detail/:id' component = { Detail } />
      <Route path='/' component = { App } />
    </Switch>
  </Router>
  , document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
