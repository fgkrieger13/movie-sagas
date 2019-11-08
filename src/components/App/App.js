import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route} from 'react-router-dom'
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';


class App extends Component {
  // Renders the entire app on the DOM

  componentDidMount() {
    // use component did mount to dispatch an action to request the plantList from the API
    this.props.dispatch({type: 'GET_MOVIES'})
}

  render() {
    return (
      <Router>
      <div className="App">
      <Route path="/" exact component={MovieList} />
      <Route path="/MovieDetails" component={MovieDetails} />
      </div>
      </Router>
    );
  }
}

export default connect()(App);
