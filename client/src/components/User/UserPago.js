import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

class UserServicio extends Component {
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
          <FormGroup>
            <Label htmlFor="tarjeta">Número de Tarjeta</Label>
            <Input id="tarjeta" name="tarjeta" type="text" placeholder="Número de Tarjeta" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="vencimiento">Fecha de Vencimiento</Label>
            <Input id="vencimiento" name="vencimiento" type="text" placeholder="Fecha de Vencimiento" />
          </FormGroup>

          <Button>Agregar</Button>
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

export default UserServicio;