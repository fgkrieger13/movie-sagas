import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class MovieDetails extends Component {
  // Renders the entire app on the DOM

  componentDidMount() {
    // use component did mount to dispatch an action to request the plantList from the API
    this.props.dispatch({type: 'GET_MOVIES'})
}

  render() {
    return (
        <>
            <button onClick={()=> this.props.history.push('/')}>Back to list</button>
            <button>Edit</button>
            <p>your movie</p>
            
        </>
    );
  }
}

export default connect(mapStateToProps)(MovieDetails);