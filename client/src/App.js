import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar'
import ZonoIntro from './components/ZonoIntro'
import Zono from './views/Zono'
import User from './views/User'
import Admin from './views/Admin'
import Home from './views/Home'
import Taxi from './views/Taxista'
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
	    <Switch>
	      <Route path="/home" component={Home} />
	      <Route path="/app" component={Zono}/>
        <Route path="/user" component={User} />
        <Route path="/admin" component={Admin}/>
        <Route path="/taxi" component={Taxi}/>
	      <Route path="/" component={Home} />
	    </Switch>
    </div>
    );
  }
}

export default App;
