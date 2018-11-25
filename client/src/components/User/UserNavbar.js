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

class UserNavbar extends Component {
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
				<Navbar color="dark" dark expand="sm" className="mb-5">
						<NavbarBrand><Link to="/user/historial">Taxi Unico</Link></NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink><Link to="/user/historial">Historial</Link></NavLink>
								</NavItem>
								<NavItem>
									<NavLink><Link to="/user/servicios">Servicios</Link></NavLink>
								</NavItem>
								<NavItem>
									<NavLink><Link to="/user/pago">Metodos de Pago</Link></NavLink>
								</NavItem>
							</Nav>
						</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default UserNavbar;