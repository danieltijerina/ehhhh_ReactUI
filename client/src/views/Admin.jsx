import React, { Component } from 'react';
import AdminNavbar from '../components/Admin/AdminNavbar';
import AdminClientes from './Admin/AdminClientes';
import AdminTaxista from './Admin/AdminTaxistas';
import AdminServicios from './Admin/AdminServicios';
import AdminAdministradores from './Admin/AdminAdministradores';
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AdminNavbar/>
        <Container>
          <Redirect to="/admin/home"/>
          <Switch>
            <Route path="/admin/home"/>
            <Route path="/admin/taxis" component={AdminTaxista}/>
            <Route path="/admin/servicios" component={AdminServicios}/>
            <Route path="/admin/clientes" component={AdminClientes}/>
            <Route path="/admin/administradores" component={AdminAdministradores}/>
            <Route path="/admin/encuestas"/>
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;