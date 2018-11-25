import React, { Component } from 'react';
import UserNavbar from '../components/User/UserNavbar';
import UserHistorial from './User/UserHistorial';
import UserServicio from './User/UserServicio';
import UserPago from './User/UserPago';
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserNavbar />
        <Redirect to="/user/servicios" />
        <Container>
          <Switch>
            <Route path="/user/servicios" component={UserServicio} />
            <Route path="/user/historial" component={UserHistorial} />
            <Route path="/user/pago" component={UserPago} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
