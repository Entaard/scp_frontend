import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'
import authReducer from './AuthReducer'
import homeReducer from './HomeReducer'
import productReducer from './ProductReducer'

const RootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  auth: authReducer,
  home: homeReducer,
  product: productReducer,
});

export default RootReducer;
