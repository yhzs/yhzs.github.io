import { combineReducers } from 'redux';
import errorMessage from './errorMessages'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

export default combineReducers({
    errorMessage,
    routing: routerReducer
});