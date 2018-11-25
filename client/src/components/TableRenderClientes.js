import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class TableRender extends Component {
	render() {
		let rows = this.props.data.map(person => {
	      return <PersonRow key = {
	        person.id
	      }
	      data = {
	        person
	      }
	      />
	    })
	    return ( 
	    	<Table striped bordered>
	    <thead>
	    	<tr>
	    		<th>ID</th>
	    		<th>Usuario</th>
	    		<th>Nombre</th>
	    		<th>Apellido</th>
	    	</tr>
	    </thead>
	      < tbody > {
	        rows
	      } < /tbody> < /Table> );
	}
}

const PersonRow = (props) => {
  return (
    <tr>
      <td>
        { props.data.id }
      </td>
      <td>
        { props.data.username }
      </td>
      <td>
        { props.data.name }
      </td>
      <td>
      	{ props.data.lastName }
      </td>
    </tr>
  );
}

export default TableRender;