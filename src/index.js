import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
// setup redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


// empty state for reset
const emptyState = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: ''
}

const getFeedbackReducer = (state=[ ], action) => {
    // console.log('In Get Feedback Reducer');
    if (action.type === 'GET_FEEDBACK') {
        state = action.payload;
    }
    return state;
}

// reducer with switch for cases
const feedbackReducer = (state=emptyState, action) => {
    switch (action.type) {
        case 'ADD_FEELING':
            state.feeling = action.payload.feeling
            break;
        case 'ADD_UNDERSTANDING':
            state.understanding = action.payload.understanding
            break;
        case 'ADD_SUPPORT':
            state.support = action.payload.support
            break;
        case 'ADD_COMMENTS':
            state.comments = action.payload.comments
            break;
        case 'EMPTY_STATE':
            state = {
                feeling: 0,
                understanding: 0,
                support: 0,
                comments: ''
            }
            break;
        default:
            return state;
    }
    console.log('state is now:', state);
    return state;
}

// setup store for redux / react

const storeInstance = createStore(
    combineReducers({
        feedbackReducer, getFeedbackReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store = { storeInstance }><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
