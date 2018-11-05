import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


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
            <form onSubmit={this.handleClick}>
              <div id="understanding-form" className="form">
                  <label>How well are you understanding the content?</label>
                  <Input type="number" name="understanding" min="1" max="5" placeholder="Please enter a number 1-5" required onChange={this.handleChange} value={this.state.feeling}/>
                  </div>
            <div className="btn">
                <Button type="submit">Next</Button>
            </div>
            </form>
            </div>
          </div>
        );
    }
}

export default connect()(Understanding);