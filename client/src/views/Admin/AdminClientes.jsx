import React, { Component } from 'react';
import AdminClientes from '../../components/Admin/AdminClientes'
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="login">
      	<h2>Buscar un Cliente</h2>
      	<br/>
        <AdminClientes/>
      </div>
    );
  }
}

export default App;