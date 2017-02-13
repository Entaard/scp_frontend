import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {routerReducer} from 'react-router-redux'
import authReducer from './AuthReducer'
import homeReducer from './HomeReducer'
import adminProductReducer from './admin/ProductReducer'
import adminProductDetailReducer from './admin/ProductDetailReducer'
import wizardReducer from './admin/WizardReducer'
import categoryReducer from './admin/CategoryReducer'
import configReducer from './admin/ConfigReducer'

const RootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  auth: authReducer,
  home: homeReducer,
  products: adminProductReducer,
  productDetail: adminProductDetailReducer,
  // wizard: wizardReducer,
  categories: categoryReducer,
  configs: configReducer,
});

export default RootReducer;
