import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import notes from './notes';

const store = createStore(
  notes,
  applyMiddleware(thunk)
);

export default store;
