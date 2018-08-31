import React from 'react'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
NavLink } from 'reactstrap';

import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLogout } from '../redux/actions/authActions'
import FilterMovies from './FilterMovies'

class TopNav extends React.Component {
  state = {
    isOpen: true
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="top-nav">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Movie Tracker</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>


            <Nav className="ml-auto" navbar>
              <Switch>
              <Route exact path="/main" render={() => {
                return (
                  <div className="nav-buttons">
                  <NavLink style={{
                    marginRight: "100px"
                  }}><FilterMovies/></NavLink>
                  <NavItem>
                    <a href="/logout" onClick={() => this.userLogout()} className="nav-link">Logout</a>
                  </NavItem>
                  </div>
                )
              }}/>
                <Route exact path="/signup" render={() => {
                  return (
                    <NavItem>
                      <a href="/login" className="nav-link">Login</a>
                    </NavItem>
                  )
                }}/>
                <Route exact path="/login" render={() => {
                   return (
                    <NavItem>
                      <a href="/signup" className="nav-link">Signup</a>
                    </NavItem>
                   )
                }}/>

              </Switch>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: bindActionCreators(userLogout, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)
