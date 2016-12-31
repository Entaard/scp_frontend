import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'
import userReducer from './UserReducer'

const RootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  user: userReducer
});

export default RootReducer;
