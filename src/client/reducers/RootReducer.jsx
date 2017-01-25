import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'
import authReducer from './AuthReducer'
import homeReducer from './HomeReducer'
import AdminProductReducer from './admin/ProductReducer'
import AdminProductDetailReducer from './admin/ProductDetailReducer'

const RootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  auth: authReducer,
  home: homeReducer,
  products: AdminProductReducer,
  productDetail: AdminProductDetailReducer,
});

export default RootReducer;
