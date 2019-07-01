import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '@/components/Home';
import Found from '@/components/Found';
import Order from '@/components/Order';
import User from '@/components/User';
import Footer from '@/components/Footer';
class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path = '/home' component = { Home } />
          <Route path = '/found' component = { Found } />
          <Route path = '/order' component = { Order } />
          <Route path = '/user' component = { User } />
          <Redirect to={ {pathname: '/home'} } />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
