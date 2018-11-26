import Global from '../../util';
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import Historial from '../../views/User/UserHistorial';

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
    args['fechaYhora'] = args['fecha'] + ' ' + args['hora'] + ':00';
    args['id_cliente'] = localStorage.user_id;
    console.log(args);

    this.setState({
      res: JSON.stringify(args, null, 2),
    });
    fetch(Global.url+"/createViaje", {
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
        console.log(r)
        this.setState({isCreated: true});
      });
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="origen">Origen</Label>
            <Input id="origen" name="origen" type="text" placeholder="Origen" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="destino">Destino</Label>
            <Input id="destino" name="destino" type="text" placeholder="Destino" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="fecha">Fecha</Label>
            <Input id="fecha" name="fecha" type="text" placeholder="YYYY-MM-DD" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="hora">Hora</Label>
            <Input id="hora" name="hora" type="text" placeholder="HH:MM" />
          </FormGroup>          

          <Button>Solicitar Viaje</Button>
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