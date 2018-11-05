import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Feeling from '../Feeling/Feeling';

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
          {/* START Page 2 */}
          <div id="understanding-page" className="wrap">
            <div className="page-count">
              2 of 4 pages
              <div className="progress-bar">
              </div>
            </div>
            <div id="understanding-card" className="card">
              <div id="understanding-form" className="form">
                <form>
                  <label>How well are you understanding the content?</label>
                  <input />
                </form>
              </div>
                <div><button>Next</button></div>
              </div>
            </div>
            {/* END Page 2 */}
          {/* START Page 3 */}
          <div id="supported-page" className="wrap">
            <div className="page-count">
              3 of 4 pages
              <div className="progress-bar">
              </div>
            </div>
            <div id="supported-card" className="card">
              <div id="supported-form" className="form">
                <form>
                  <label>How well are you being supported?</label>
                  <input />
                </form>
              </div>
                <div><button>Next</button></div>
              </div>
            </div>
            {/* END Page 3 */}
          {/* START Page 4 */}
          <div id="comments-page" className="wrap">
            <div className="page-count">
              4 of 4 pages
              <div className="progress-bar">
              </div>
            </div>
            <div id="comments-card" className="card">
              <div id="comments-form" className="form">
                <form>
                  <label>Any Comments you want to leave?</label>
                  <input />
                </form>
              </div>
                <div><button>Next</button></div>
              </div>
            </div>
            {/* END Page 4 */}
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

export default App;
