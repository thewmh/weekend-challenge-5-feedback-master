import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const ranges = [
    {
      value: '1',
      label: 'What is support?',
    },
    {
      value: '2',
      label: 'I feel like the pig in the stick house.',
    },
    {
      value: '3',
      label: 'I don\'t feel unsupported.',
    },
    {
        value: '4',
        label: 'Yes, I feel supported!',
      },
      {
        value: '5',
        label: 'Whoa there! Help someone else too!',
      },
  ];


class Support extends Component {

    state = {
        support: ''
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log('in handleClick for support');
        if(this.state.support !== ''){
        this.props.dispatch({type: 'ADD_SUPPORT', payload: this.state});
        this.props.history.push('/4');
        } else {
            alert('Please select a value from the list!')
        }
    }

    handleChange = (event) => {
        console.log('in handleChange for support');
        this.setState ({
            ...this.state, support: event.target.value
        });
    }
    
    render() {
        return (
          <Card id="support-page" className="wrap">
            <Typography className="page-count">
              <h2>3 of 4 pages</h2>
              <div className="progress-bar">
              </div>
            </Typography>
            <CardContent id="support-card">
            <form onSubmit={this.handleClick}>
              <div id="support-form" className="form">
                  <label>How well are you being supported?</label>
                  <TextField select label="" required onChange={this.handleChange} value={this.state.support}>{ranges.map(option => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}</TextField>
                  </div>
                  <CardActions className="btn"><MuiThemeProvider theme={theme}>
                    <Button type="submit">Next</Button></MuiThemeProvider>
                </CardActions>
            </form>
            </CardContent>
          </Card>
        );
    }
}

export default connect()(Support);