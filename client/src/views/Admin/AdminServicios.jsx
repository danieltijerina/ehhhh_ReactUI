import React, { Component } from 'react';
import AdminServicios from '../../components/Admin/AdminServicios'
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="login">
      	<h2>Buscar un Servicio</h2>
      	<br/>
        <AdminServicios/>
      </div>
    );
  }
}

export default App;