import React, { Component } from 'react';
import UserServicio from '../../components/User/UserServicio'
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="login">
        <UserServicio/>
      </div>
    );
  }
}

export default App;