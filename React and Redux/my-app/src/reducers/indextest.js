import { combineReducers } from 'redux';
import postReducer from './postReducertest'

export default combineReducers(
    {posts: postReducer}
)