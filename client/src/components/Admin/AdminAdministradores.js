import React, { Component } from 'react';
import App from '../../views/Admin';
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container
} from 'reactstrap';

class AdminAdministradores extends Component {
  constructor() {
    super();
    this.state = {
      isCreated: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    const args = {};
    for (let key of data.keys()) {
      args[key] = data.get(key);
    }
    args['id_admin'] = localStorage.user_id;
    args['registrationType'] = 'A';
    console.log(args);

    this.setState({
      res: JSON.stringify(args, null, 2)
    });
    fetch('http://10.23.22.91:5000/register', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(args) // body data type must match "Content-Type" header
    })
      .then(r => r.json()) // parses response to JSON
      .then(r => {
        console.log(r);
        this.setState({ isCreated: true });
      });
  }

  render() {
    if (this.state.isCreated) {
      return <App />;
    }
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Row form>
            <Col md="6">
              <FormGroup>
                <Label htmlFor="firstName">Nombre</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Nombre"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label htmlFor="lastName">Apellido</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Apellido"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col md="6">
              <FormGroup>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="E-mail"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label htmlFor="cellphone">Celular</Label>
                <Input
                  id="cellphone"
                  name="cellphone"
                  type="text"
                  placeholder="Telefono Celular"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col md="10">
              <FormGroup>
                <Label htmlFor="date">Fecha de nacimiento</Label>
                <Input
                  id="date"
                  name="date"
                  type="text"
                  placeholder="YYYY-MM-DD"
                />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label htmlFor="sex">Sexo</Label>
                <Input id="sex" name="sex" type="select">
                  <option>M</option>
                  <option>F</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col>
              <FormGroup>
                <Label htmlFor="username">Usuario</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Usuario"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col>
              <FormGroup>
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                />
              </FormGroup>
            </Col>
          </Row>

          <Button>Registrar</Button>
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

export default AdminAdministradores;
