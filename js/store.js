import {createStore, applyMiddleware} from 'redux';
import * as reducers from './reducers/index';
import thunk from 'redux-thunk';

export default createStore(reducers.appReducer, applyMiddleware(thunk));
