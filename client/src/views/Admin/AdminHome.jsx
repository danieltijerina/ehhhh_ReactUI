import Global from '../../util'
import React, { Component } from 'react';
import TableRenderClientes from '../../components/TableRenderClientes';
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	constructor() {
    super();
    this.state = {
    	client_data: {},
    	taxi_data: {},
    	client_dataReady: false,
    	taxi_dataReady: false,
    	dataReady: false
    };

	   var client_url = Global.url+"/getAllUsers"
	   fetch(client_url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
    }).then(r => r.json()) // parses response to JSON
      .then(r => {
        //localStorage.setItem('username', r['username']);
        console.log(r)
        this.setState({client_data: r});
        this.setState({client_dataReady: true});
      });

      var taxi_url = Global.url+"/getAllTaxistas"
	   fetch(taxi_url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
    }).then(r => r.json()) // parses response to JSON
      .then(r => {
        //localStorage.setItem('username', r['username']);
        console.log(r)
        this.setState({taxi_data: r});
        this.setState({taxi_dataReady: true});
      });
	  }

  render() {
  	if(this.state.taxi_dataReady && this.state.client_dataReady){
  		return(
	  		<div className="login">
	      	<h1>Buscar un Servicio</h1>
	      	<br/>
	      	<h3>Taxistas</h3>
	        <TableRenderClientes data={this.state.taxi_data}/>
	        <br/>
	        <h3>Clientes</h3>
	        <TableRenderClientes data={this.state.client_data}/>
      </div>
      );
  	}
    return (
      <div className="login">
      	<h1>Buscar un Servicio</h1>
      </div>
    );
  }
}

export default App;