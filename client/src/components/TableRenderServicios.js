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
	    		<th>Origen</th>
	    		<th>Destino</th>
	    		<th>Costo</th>
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
        { props.data.origen }
      </td>
      <td>
        { props.data.destino }
      </td>
      <td>
        { props.data.costoPorKilometro }
      </td>
    </tr>
  );
}

export default TableRender;