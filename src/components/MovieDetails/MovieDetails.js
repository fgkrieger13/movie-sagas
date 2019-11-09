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
            <button onClick= {()=> this.props.history.push('/EditPage')}>Edit</button>
                <div>
                    <h2 className = 'title'>{this.props.reduxState.specificMovie.title}</h2>
                    <p className = 'description'>{this.props.reduxState.specificMovie.description}</p>
                    <li>{this.props.reduxState.specificMovie.name}</li>
                </div> 
        </>
    );
  }
}

export default connect(mapStateToProps)(MovieDetails);