import React, { Component } from 'react';
import './App.css';
import Main from './components/Main'
import Login from './components/Login'
import TopNav from './components/TopNav'
import Signup from './components/Signup'
import { connect } from 'react-redux'

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App" >
          <div >
          <Route path="/" component={TopNav}/>
            <Route exact path="/" component={() => <Redirect to="/login" />}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/main" component={Main}/>
            <Route exact path="/logout" component={Login}/>
          </div>
      </div>
    );
  }
  componentDidMount(){
    // this.props.currentUser ? localStorage.setItem('currentUser', this.props.currentUser) : null

  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.user
})


export default connect(mapStateToProps)(App)
