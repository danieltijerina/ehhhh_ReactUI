import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

class Signup extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
  
    const args={};
    for (let key of data.keys()) {
      args[key] = data.get(key);
    }
    args['registrationType']='U';
    console.log(args);

    this.setState({
      res: JSON.stringify(args, null, 2),
    });
    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // });
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>

        <Row form>
          <Col md="6">
            <FormGroup>
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" name="name" type="text" placeholder="Nombre" />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
                <Label htmlFor="lastname">Apellido</Label>
                <Input id="lastname" name="lastname" type="text" placeholder="Apellido" />
            </FormGroup>
          </Col>
        </Row>

        <Row form>
          <Col>
            <FormGroup>
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" name="email" type="email" placeholder="E-mail" />
            </FormGroup>
          </Col>
        </Row>

        <Row form>
          <Col md="10">
            <FormGroup>
                <Label htmlFor="dob">Fecha de nacimiento</Label>
                <Input id="dob" name="dob" type="text" placeholder="YYYY-MM-DD" />
            </FormGroup>
          </Col>
          <Col md="2">
            <FormGroup>
                <Label htmlFor="sexo">Sexo</Label>
                <Input id="sexo" name="sexo" type="select">
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
                <Input id="username" name="username" type="text" placeholder="Usuario" />
            </FormGroup>
          </Col>
        </Row>

        <Row form>
          <Col>
            <FormGroup>
                <Label htmlFor="password">Contraseña</Label>
                <Input id="password" name="password" type="password" placeholder="Contraseña" />
            </FormGroup>
          </Col>
        </Row>

          <Button>Registrarse</Button>
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

export default Signup;