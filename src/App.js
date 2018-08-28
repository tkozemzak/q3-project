import React, { Component } from 'react';
import './App.css';
import Main from './components/Main'
import Header from './components/Header'
import { connect } from 'react-redux'



//this.props.movies[0] ? `url(${backgroundImg})` : null
//"url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Duck_Slipway_2017.jpg/220px-Duck_Slipway_2017.jpg')"
class App extends Component {
  render() {

    



    return (
      <div className="App" >
        <Header />
        <Main />
      </div>
    );
  }


}

const mapStateToProps = state => ({
  movies: state.movies.currentMovie
})

export default connect(mapStateToProps)(App)
