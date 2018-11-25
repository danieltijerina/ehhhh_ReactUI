import React, { Component } from 'react';
import Login from '../components/Login'
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="login">
        <Login/>
      </div>
    );
  }
}

export default App;