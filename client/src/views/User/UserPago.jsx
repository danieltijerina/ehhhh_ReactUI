import React, { Component } from 'react';
import UserPago from '../../components/User/UserPago'
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="login">
      	<h2>Métodos de Pago</h2>
      	<br/>
        <UserPago/>
      </div>
    );
  }
}

export default App;