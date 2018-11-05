import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


class Support extends Component {

    state = {
        support: ''
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log('in handleClick for support');
        this.props.dispatch({type: 'ADD_SUPPORT', payload: this.state});
        this.props.history.push('/4');
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
            <form onSubmit={this.handleClick}>
              <div id="support-form" className="form">
                  <label>How well are you being supported?</label>
                  <Input type="number" name="support" min="1" max="5" placeholder="Please enter a number 1-5" required onChange={this.handleChange} value={this.state.feeling}/>
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

export default connect()(Support);