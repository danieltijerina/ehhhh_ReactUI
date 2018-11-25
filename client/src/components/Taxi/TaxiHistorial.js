import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import TableRender from '../TableRenderServicios';

class UserHistorial extends Component {
  constructor() {
    super();
    this.state = {
      data: [{
          id: 1,
          username: "dondaniel",
          name: "Daniel",
          lastname: "Tijerina"
        }, {
          id: 2,
          username: "aaronga",
          name: "Aaron",
          lastname: "Garcia"
        }]
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
    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // });
  }

  render() {
    return (
      <Container>
        
        {this.state.res && (
          <div className="res-block">
            <br/>
            <TableRender data={this.state.data}/>
            <h3>Data to be sent:</h3>
            <pre>FormData {this.state.res}</pre>
          </div>
        )}
      </Container>
    );
  }
}

export default AdminClientes;