import React, { Component } from 'react';
import TaxiNavbar from '../components/Taxi/TaxiNavbar';
import TaxiHistorial from './Taxi/TaxiHistorial';
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import {Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaxiNavbar/>
        <Redirect to="/taxi/historial"/>
        <Container>
          <Switch>
            <Route path="/taxi/historial" component={TaxiHistorial}/>
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;