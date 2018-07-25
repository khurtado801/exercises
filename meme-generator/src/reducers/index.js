import { combineReducers } from 'redux';
import { RECEIVE_MEMES, NEW_MEME } from '../actions';

// Reducer
function memes(state = [], action) {
    switch (action.type) {
        case RECEIVE_MEMES:
            return action.memes;
        default:
            return state;
    }
}

// Root reducer
const rootReducer = combineReducers({ memes });

export default rootReducer;
