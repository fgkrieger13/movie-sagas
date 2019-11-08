import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class App extends Component {
  // Renders the entire app on the DOM

  componentDidMount() {
    // use component did mount to dispatch an action to request the plantList from the API
    this.props.dispatch({type: 'GET_MOVIES'})
}

  render() {
    return (
        <>
            {this.props.reduxState.movies.map((movie) => (
                <>
                    <h2>{movie.title}</h2>
                    <img src={movie.poster} alt={movie.title}></img>
                    <p>{movie.description}</p>
                </>
            ))}
        </>
     
    );
  }
}

export default connect(mapStateToProps)(App);