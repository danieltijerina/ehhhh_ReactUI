import React, { Component } from 'react';
import AdminTaxistas from '../../components/Admin/AdminTaxistas'
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="login">
      	<h1>Crear un Taxista</h1>
      	<br/>
        <AdminTaxistas/>
      </div>
    );
  }
}

export default App;