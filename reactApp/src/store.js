import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from './reducers/rootReducer';

const middelware = applyMiddleware(promise(), thunk, createLogger());

export default createStore(rootReducer, middelware);
