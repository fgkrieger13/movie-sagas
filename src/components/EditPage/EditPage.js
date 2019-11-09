import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class MovieDetails extends Component {
  // Renders the entire app on the DOM

  state = {
    newTitle: '',
    newDescription: '',
    id: this.props.reduxState.specificMovie.movie_id
}

  componentDidMount() {
    // use component did mount to dispatch an action to request the plantList from the API
    this.props.dispatch({type: 'GET_MOVIES'})
}
onChangeFor = (placeHolder) => (event) => {
    this.setState({
            [placeHolder]: event.target.value
        });
}
editMovie = (newMovie) => {
    this.props.dispatch({type: 'PUT_MOVIES', payload: newMovie})
    this.props.history.push('/MovieDetails')
}

  render() {
    return (
        <>
            <button onClick={()=> this.props.history.push('/MovieDetails')}>Cancel</button>
            <button onClick = {() => this.editMovie(this.state)}>Save</button>
            <input onChange = {this.onChangeFor('newTitle')} value = {this.state.newTitle} placeholder = {this.props.reduxState.specificMovie.title}></input>
            <input onChange = {this.onChangeFor('newDescription')} value = {this.state.newDescription} placeholder = {this.props.reduxState.specificMovie.description}></input>
            {/* <h2 className = 'title'>{this.props.reduxState.specificMovie.title}</h2>
            <p className = 'description'>{this.props.reduxState.specificMovie.description}</p> */}
                
        </>
    );
  }
}

export default connect(mapStateToProps)(MovieDetails);