import Global from '../../util'
import React, { Component } from 'react';
import TableRender from '../../components/TableRenderServicios'
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	constructor() {
    super();
    this.state = {
    	data: {},
    	dataReady: false
    };

	   var url = Global.url+"/getViajesFromCliente?username=";
	   url += localStorage.username;
	   fetch(url, {
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
        this.setState({data: r});
        this.setState({dataReady: true});
      });
	  }

  render() {
  	if(this.state.dataReady){
  		return (
	      <div>
	      	<h1>Historial de Servicios</h1>
	      	<br/>
	        <TableRender data={this.state.data}/>
	      </div>
	    );
  	}
  	return(
  		<h1>Historial de Servicios</h1>
  	);
  }
}

export default App;