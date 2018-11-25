import React, { Component } from 'react';
import Signup from '../components/Signup'
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="login">
        <Signup/>
      </div>
    );
  }
}

export default App;