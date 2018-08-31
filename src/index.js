import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'
import { fetchMovies } from './redux/actions/movieActions'
import { fetchComments } from './redux/actions/commentActions'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'


let newStore = store()

newStore.dispatch(fetchMovies())
newStore.dispatch(fetchComments())

ReactDOM.render(<BrowserRouter><Provider store={newStore}><App /></Provider></BrowserRouter>, document.getElementById('root'));
