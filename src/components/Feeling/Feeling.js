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


class Feeling extends Component {

    state = {
        feeling: ''
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log('in handleClick for feeling');
        if(this.state.feeling !== ''){
        this.props.dispatch({type: 'ADD_FEELING', payload: this.state});
        this.props.history.push('/2');
        } else {
            alert ('Please select a value from the list!')
        }
    }

    handleChange = (event) => {
        console.log('in handleChange for feeling');
        this.setState ({
            ...this.state, feeling: event.target.value
        });
    }
    
    render() {
        return (
          <Card id="feeling-page" className="wrap">
            <Typography className="page-count">
              <h2>1 of 4 pages</h2>
              <div className="progress-bar">
              </div>
            </Typography>
            <CardContent id="feeling-card">
            <form onSubmit={this.handleClick}>
              <div id="feeling-form" className="form">
                  <label>How are you feeling today?</label><br/>
                  <TextField select label="" required onChange={this.handleChange} value={this.state.feeling}>{ranges.map(option => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}</TextField>
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


export default connect()(Feeling);