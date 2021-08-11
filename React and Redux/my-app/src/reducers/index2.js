import { combineReducers } from 'redux';
import postReducer from './postReducer';
// import { FETCH_POSTS, NEW_POST } from '../actions/types';

export default combineReducers({
    posts: postReducer
})
