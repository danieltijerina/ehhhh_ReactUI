import Global from '../../util'
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import TableRender from '../TableRenderServicios';

class AdminClientes extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      dataReady: false 
    };

    fetch(Global.url+"/getAllViajes", {
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
    if(this.state.dataReady) {
      return (
        <Container>
            <div className="res-block">
              <br/>
              <h3>Viajes</h3>
              <TableRender data={this.state.data}/>
            </div>
        </Container>
    );}
    return(
      <Container>
        <div className="res-block">
          <br/>
          <h3>Viajes</h3>
        </div>
      </Container>
    );
  }
}

export default AdminClientes;