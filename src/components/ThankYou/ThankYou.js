import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                Thank You!
                <div><button onClick={this.handleClick}>Leave New Feedback</button></div>
              </div>
            </div>
        )
    }
}
  
export default connect()(ThankYou);