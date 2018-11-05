import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {

    state = {
        feeling: ''
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log('in handleClick for feeling');
        this.props.dispatch({type: 'ADD_FEELING', payload: this.state})
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
              <div id="feeling-form" className="form">
                <form onSubmit={this.handleClick}>
                  <label>How are you feeling today?</label>
                  <input type="number" name="feeling" onChange={this.handleChange} value={this.state.feeling}/>
                </form>
              </div>
                <div><button type="submit" value="submit" >Next</button></div>
              </div>
            </div>
        );
    }
}


export default connect()(Feeling);