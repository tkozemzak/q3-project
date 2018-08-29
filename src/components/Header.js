import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import FilterMovies from './FilterMovies'


export default class Header extends Component {
    toggleNavbar = this.toggleNavbar.bind(this);
    state = {
      collapsed: true
    };


  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="black" light>
          <NavbarBrand href="/" className="mr-auto"></NavbarBrand>
          <NavLink><FilterMovies/></NavLink>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
              <NavLink href="https://github.com/tkozemzak">Github</NavLink>
              <NavLink href="https://www.linkedin.com/in/tim-kozemzak/">LinkedIn</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
