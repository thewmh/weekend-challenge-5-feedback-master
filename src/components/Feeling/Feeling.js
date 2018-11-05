import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {

    state = {
        feeling: ''
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log('in handleClick for feeling');
        this.props.dispatch({type: 'ADD_FEELING', payload: this.state});
        this.props.history.push('/2');
    }

    handleChange = (event) => {
        console.log('in handleChange for feeling');
        this.setState ({
            ...this.state, feeling: event.target.value
        });
    }
    
    render() {
        return (
          <div id="feeling-page" className="wrap">
            <div className="page-count">
              1 of 4 pages
              <div className="progress-bar">
              </div>
            </div>
            <div id="feeling-card" className="card">
            <form onSubmit={this.handleClick}>
              <div id="feeling-form" className="form">
                  <label>How are you feeling today?</label>
                  <input type="number" name="feeling" min="1" max="5" placeholder="Please enter a number 1-5" required onChange={this.handleChange} value={this.state.feeling}/>
              </div>
            <div className="btn">
                <button type="submit">Next</button>
            </div>
            </form>
            </div>
          </div>
        );
    }
}


export default connect()(Feeling);