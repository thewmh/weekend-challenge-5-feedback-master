import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Feeling />
        <Understanding />
        <Support />
        <Comments />
          {/* START Page 5 */}
          <div id="thankYou-page" className="wrap">
            <div>
                Thank You!
                <div><button>Leave New Feedback</button></div>
              </div>
            </div>
            {/* END Page 5 */}

      </div>
    );
  }
}

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });
  
export default connect(mapReduxStateToProps)(App);
