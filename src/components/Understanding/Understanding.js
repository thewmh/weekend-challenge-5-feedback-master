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
      label: '1',
    },
    {
      value: '2',
      label: '2',
    },
    {
      value: '3',
      label: '3',
    },
    {
        value: '4',
        label: '4',
      },
      {
        value: '5',
        label: '5',
      },
  ];

class Understanding extends Component {

    state = {
        understanding: ''
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log('in handleClick for understanding');
        if(this.state.understanding !== ''){
        this.props.dispatch({type: 'ADD_UNDERSTANDING', payload: this.state});
        this.props.history.push('/3');
        } else {
            alert ('Please select a value from the list!')
        }
    }

    handleChange = (event) => {
        console.log('in handleChange for understanding');
        this.setState ({
            ...this.state, understanding: event.target.value
        });
    }
    
    render() {
        return (
          <Card id="understanding-page" className="wrap">
            <Typography className="page-count">
              2 of 4 pages
              <div className="progress-bar">
              </div>
            </Typography>
            <CardContent id="understanding-card">
            <form onSubmit={this.handleClick}>
              <div id="understanding-form" className="form">
                  <label>How well are you understanding the content?</label><br/>
                  <TextField select label="" required onChange={this.handleChange} value={this.state.understanding}>{ranges.map(option => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}</TextField>
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

export default connect()(Understanding);