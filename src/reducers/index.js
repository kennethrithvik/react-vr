import { combineReducers } from 'redux';
import client from '../store/configureApollo';
// import all reducers here.
import fetchImageReducer from './fetchImageReducer';

const rootReducer = combineReducers({
  // use the imported reducers here.
  images: fetchImageReducer,
  apollo: client.reducer()
});

export default rootReducer;