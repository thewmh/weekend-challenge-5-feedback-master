import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

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
            <div>
                <table>
                    <thead>
                        <tr>
                        <th>Feeling</th><th>Comprehension</th><th>Support</th><th>Comments</th><th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxState.getFeedbackReducer.map(feedback => (
                            <tr key={feedback.id}>
                            <td>{feedback.feeling}</td><td>{feedback.understanding}</td><td>{feedback.support}</td><td>{feedback.comments}</td><td><button onClick={() => { this.deleteFeedback(feedback.id)}}>DELETE</button></td>
                            </tr>
                        ))}
                        <tr>

                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

export default connect(mapReduxStateToProps)(Admin);