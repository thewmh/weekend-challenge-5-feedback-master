import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides: {
      // Name of the component ⚛️ / style sheet
      MuiButton: {
        // Name of the rule
        root: {
          marginLeft: '80%',
        },
      },
    },
  });

class Comments extends Component {

    state = {
        comments: ''
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log('in handleClick for comments');
        if(this.state.comments !== ''){
        this.props.dispatch({type: 'ADD_COMMENTS', payload: this.state});
        this.props.history.push('/5');
        this.sendFeedback();
        } else {
            alert('Please leave a comment!');
        }
    }

    handleChange = (event) => {
        console.log('in handleChange for comments');
        this.setState ({
            ...this.state, comments: event.target.value
        });
    }

    sendFeedback = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: this.props.reduxState.feedbackReducer
        })
        .then((response) => {
            this.props.dispatch( {type: 'EMPTY_STATE'} );
            console.log('feedback successfully POSTed to database', response.data)
        })
        .catch((error) => {
            console.log('Unable to POST feedback to database', error)
        })
    }
    
    render() {
        return (
          <Card id="comments-page" className="wrap">
            <Typography className="page-count">
              4 of 4 pages
              <div className="progress-bar">
              </div>
            </Typography>
            <CardContent id="comments-card">
            <form onSubmit={this.handleClick}>
              <div id="comments-form" className="form">
                  <label>Any Comments you want to leave?</label><br />
                  <TextField type="text" name="comments" placeholder="Please enter a comment or 'no comment' if you have none" onChange={this.handleChange} value={this.state.comments}/>
                  </div>
            <CardActions className="btn"><MuiThemeProvider theme={theme}>
                <Button type="submit">Submit!</Button></MuiThemeProvider>
            </CardActions>
            </form>
            </CardContent>
          </Card>
        );
    }
}

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });
  
export default connect(mapReduxStateToProps)(Comments);