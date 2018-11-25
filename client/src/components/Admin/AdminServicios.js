import Global from '../../util';
import React, { Component } from 'react';
import TableRender from '../TableRenderServicios';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

class AdminServicios extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      dataReady: false
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
    console.log(args);

    this.setState({
      res: JSON.stringify(args, null, 2)
    });

    fetch(Global.url+"/getViajesFromCliente?username="+args['username'], {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer" // body data type must match "Content-Type" header
    }).then(r => r.json()) // parses response to JSON
      .then(r => {
        console.log(r)
        this.setState({data: r});
        this.setState({dataReady: true});
      });
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="username">Usuario de Cliente</Label>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="Usuario"
            />
          </FormGroup>

          <Button>Consultar Historial</Button>
        </Form>
        {this.state.res && this.state.dataReady &&(
          <div className="res-block">
            <br/>
            <h3>Viajes</h3>
            <TableRender data={this.state.data}/>
          </div>
        )}
      </Container>
    );
  }
}

export default AdminServicios;
