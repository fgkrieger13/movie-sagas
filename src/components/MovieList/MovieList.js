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
                <div key={movie.id} className= "single">
                    <img src={movie.poster} alt={movie.title}></img>
                    <h2 className = 'title'>{movie.title}</h2>
                    <p className = 'description'>{movie.description}</p>
                </div>
            ))}
        </>
    );
  }
}

export default connect(mapStateToProps)(App);