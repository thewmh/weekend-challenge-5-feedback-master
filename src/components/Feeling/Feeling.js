import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
    
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
                <form>
                  <label>How are you feeling today?</label>
                  <input />
                </form>
              </div>
                <div><button>Next</button></div>
              </div>
            </div>
        );
    }
}


export default connect()(Feeling);