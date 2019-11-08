import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class MovieList extends Component {
  // Renders the entire app on the DOM



  componentDidMount() {
    // use component did mount to dispatch an action to request the plantList from the API
    this.props.dispatch({type: 'GET_MOVIES'})
}
selectMovie = (movie) => {
    this.props.dispatch({type: 'SPECIFIC_MOVIE', payload: movie})
    this.props.history.push('/MovieDetails')
}

  render() {
    return (
        <>
            {this.props.reduxState.movies.map((movie) => (
                <div onClick = {() => this.selectMovie(movie)} key={movie.movie_id} className= "single">
                    <img src={movie.poster} alt={movie.title}></img>
                    <h2 className = 'title'>{movie.title}</h2>
                    <p className = 'description'>{movie.description}</p>
                </div>
            ))}
        </>
    );
  }
}

export default connect(mapStateToProps)(MovieList);