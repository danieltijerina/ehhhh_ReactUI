import React, { Component } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';

class AdminNavbar extends Component {
	state = {
		isOpen: false
	}

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return(
			<div>
				<Navbar color="dark" dark expand="sm" className="mb-2">
						<NavbarBrand><Link to="/admin/clientes">Admin Taxi Unico</Link></NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem onClick={this.toggle}>
									<NavLink><Link to="/admin/clientes">Clientes</Link></NavLink>
								</NavItem>
								<NavItem onClick={this.toggle}>
									<NavLink><Link to="/admin/taxis">Taxistas</Link></NavLink>
								</NavItem>
								<NavItem onClick={this.toggle}>
									<NavLink><Link to="/admin/administradores">Administradores</Link></NavLink>
								</NavItem>
								<NavItem onClick={this.toggle}>
									<NavLink><Link to="/admin/servicios">Servicios</Link></NavLink>
								</NavItem>
								<NavItem onClick={this.toggle}>
									<NavLink><Link to="/admin/encuestas">Encuestas</Link></NavLink>
								</NavItem>
							</Nav>
						</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default AdminNavbar;