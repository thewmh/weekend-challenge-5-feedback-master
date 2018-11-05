import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    state = {
        support: ''
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log('in handleClick for support');
        this.props.dispatch({type: 'ADD_SUPPORT', payload: this.state})
    }

    handleChange = (event) => {
        console.log('in handleChange for support');
        this.setState ({
            ...this.state, support: event.target.value
        });
    }
    
    render() {
        return (
          <div id="support-page" className="wrap">
            <div className="page-count">
              3 of 4 pages
              <div className="progress-bar">
              </div>
            </div>
            <div id="support-card" className="card">
              <div id="support-form" className="form">
                <form onSubmit={this.handleClick}>
                  <label>How well are you being supported?</label>
                  <input type="number" name="support" onChange={this.handleChange} value={this.state.feeling}/>
                </form>
              </div>
                <div><button type="submit" value="submit" >Next</button></div>
              </div>
            </div>
        );
    }
}

export default connect()(Support);