import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class ThankYou extends Component {

    handleClick = (event) => {
        event.preventDefault();
        console.log('in handleClick for thank you');
        this.props.history.push('/');
    }

    render() {
        return (

          <div id="thankYou-page" className="wrap">
            <div>
                <h1>Thank You!</h1>
                <div><Button className="ty-btn" onClick={this.handleClick}>Leave New Feedback</Button></div>
              </div>
            </div>
        )
    }
}
  
export default connect()(ThankYou);