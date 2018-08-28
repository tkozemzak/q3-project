import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'
import { fetchMovies } from './redux/actions/movieActions'
import { Provider } from 'react-redux'

let newStore = store()

newStore.dispatch(fetchMovies())

ReactDOM.render(<Provider store={newStore}><App /></Provider>, document.getElementById('root'));
