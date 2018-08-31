import React, { Component } from 'react';
import Movie from './Movie'
import WatchList from './WatchList'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'

class Main extends Component {
  render () {
    return (
      <div className="container">
        <div className="movie">
          <Movie/>
            </div>
              <div className="watchlist">
              <WatchList/>
            </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, null)(Main)
