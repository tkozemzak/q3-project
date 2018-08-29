import React, { Component } from 'react';
import Movie from './Movie'
import WatchList from './WatchList'
import HomePage from './HomePage'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


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

export default Main;
