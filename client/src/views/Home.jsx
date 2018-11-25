import React, { Component } from 'react';
import AppNavbar from '../components/AppNavbar';
import ZonoIntro from '../components/ZonoIntro';
import Login from './Login';
import Signup from './Signup';
import Zono from './Zono';
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar/>
        <Redirect to="/home/us"/>
        <Switch>
          <Route path="/home/us" component={ZonoIntro}/>
          <Route path="/home/login" component={Login}/>
          <Route path="/home/signup" component={Signup}/>
        </Switch>
      </div>
    );
  }
}

export default App;