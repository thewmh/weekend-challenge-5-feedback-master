import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Comments extends Component {

    state = {
        comments: ''
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log('in handleClick for comments');
        this.props.dispatch({type: 'ADD_COMMENTS', payload: this.state});
        this.props.history.push('/5');
        this.sendFeedback();
    }

    handleChange = (event) => {
        console.log('in handleChange for comments');
        this.setState ({
            ...this.state, comments: event.target.value
        });
    }

    sendFeedback = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: this.props.reduxState.feedbackReducer
        })
        .then((response) => {
            this.props.dispatch( {type: 'EMPTY_STATE'} );
            console.log('feedback successfully POSTed to database', response.data)
        })
        .catch((error) => {
            console.log('Unable to POST feedback to database', error)
        })
    }
    
    render() {
        return (
          <div id="comments-page" className="wrap">
            <div className="page-count">
              4 of 4 pages
              <div className="progress-bar">
              </div>
            </div>
            <div id="comments-card" className="card">
              <div id="comments-form" className="form">
                <form onSubmit={this.handleClick}>
                  <label>Any Comments you want to leave?</label>
                  <input type="text" name="comments" required onChange={this.handleChange} value={this.state.feeling}/>
                  <div>
                        <button type="submit">Submit!</button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        );
    }
}

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });
  
export default connect(mapReduxStateToProps)(Comments);