import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import App from '../views/User';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
  
    const args={};
    for (let key of data.keys()) {
      args[key] = data.get(key);
    }
    console.log(args);

    this.setState({
      res: JSON.stringify(args, null, 2),
    });

    fetch("http://10.23.22.91:5000/login", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(args), // body data type must match "Content-Type" header
    }).then(r => r.json()) // parses response to JSON
      .then(r => {
        localStorage.setItem('username', r['username']);
        localStorage.setItem('user_id', r['id']);
        console.log(r)
        this.setState({isAuthenticated: true});
      });
  }

  render() {
      if(this.state.isAuthenticated) {
        return( <App/> );
      }
      return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="username">Usuario</Label>
            <Input id="username" name="username" type="text" placeholder="Usuario" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" name="password" type="password" placeholder="Contraseña" />
          </FormGroup>

          <FormGroup tag="fieldset">
          <legend>Tipo</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="registrationType" value="U" checked={true}/>{' '}
              Cliente
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="registrationType" value="A"/>{' '}
              Administrador
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="registrationType" value="T"/>{' '}
              Taxista
            </Label>
          </FormGroup>
        </FormGroup>

          <Button>Iniciar Sesión</Button>
        </Form>
        
        {this.state.res && (
          <div className="res-block">
            <h3>Data to be sent:</h3>
            <pre>FormData {this.state.res}</pre>
          </div>
        )}
      </Container>
    );
  }
}

export default Login;