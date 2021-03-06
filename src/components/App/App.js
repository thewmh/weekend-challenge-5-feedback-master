import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import ThankYou from '../ThankYou/ThankYou';
import Admin from '../Admin/Admin';
import { connect } from 'react-redux';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';


class App extends Component {
  render() {
    return (
      <div className="App">
      <CssBaseline />
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
          <div>
        <Route exact path='/' component={Feeling} />
        <Route path='/2' component={Understanding} />
        <Route path='/3' component={Support} />
        <Route path='/4' component={Comments} />
        <Route path='/5' component={ThankYou} />
        <Route path='/admin' component={Admin} />
          </div>
        </Router>
      </div>
    );
  }
}

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });
  
export default connect(mapReduxStateToProps)(App);
