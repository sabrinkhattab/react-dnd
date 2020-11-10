import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Reducers from './reducers';

const Store = createStore(Reducers, applyMiddleware(thunk, logger));

export default Store;