import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {

    state = {
        understanding: ''
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log('in handleClick for understanding');
        this.props.dispatch({type: 'ADD_UNDERSTANDING', payload: this.state});
        this.props.history.push('/3');
    }

    handleChange = (event) => {
        console.log('in handleChange for understanding');
        this.setState ({
            ...this.state, understanding: event.target.value
        });
    }
    
    render() {
        return (
          <div id="understanding-page" className="wrap">
            <div className="page-count">
              2 of 4 pages
              <div className="progress-bar">
              </div>
            </div>
            <div id="understanding-card" className="card">
              <div id="understanding-form" className="form">
                <form onSubmit={this.handleClick}>
                  <label>How well are you understanding the content?</label>
                  <input type="number" name="understanding" min="1" max="5" required onChange={this.handleChange} value={this.state.feeling}/>
                  <div>
                        <button type="submit">Next</button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        );
    }
}

export default connect()(Understanding);