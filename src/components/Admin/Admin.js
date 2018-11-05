import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


class Admin extends Component {

    state = {

    }


    componentDidMount() {
        this.getAllFeedback();
      }
    
      getAllFeedback = () => {
        // GET Feedback from the server
        axios.get('/feedback') 
          .then( (response) => {
            //   console.log('getting Feedback from server', response.data);
              this.props.dispatch( {type: 'GET_FEEDBACK', payload: response.data} );
          })
          .catch( (error) => {
            alert('error!!');
          })  
        }

        deleteFeedback(){
            alert('are you sure?!')
        }

        deleteFeedback = (id) => {
            console.log(id);
            axios({
              method: 'DELETE',
              url: `/feedback/${id}`
            })
            .then( (response) => {
                console.log('feedback id: ', response);
                this.getAllFeedback();
            })
          }

    render() {
        return (
            <Paper className="table">
                <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell>Feeling</TableCell><TableCell>Comprehension</TableCell><TableCell>Support</TableCell><TableCell>Comments</TableCell><TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.reduxState.getFeedbackReducer.map(feedback => (
                            <TableRow key={feedback.id}>
                            <TableCell>{feedback.feeling}</TableCell><TableCell>{feedback.understanding}</TableCell><TableCell>{feedback.support}</TableCell><TableCell>{feedback.comments}</TableCell><TableCell><Button onClick={() => { this.deleteFeedback(feedback.id)}}>DELETE<DeleteIcon fontSize="large" />
</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}
const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

export default connect(mapReduxStateToProps)(Admin);