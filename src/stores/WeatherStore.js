import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import RootReducer from '../reducers/RootReducer';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const WeatherStore = createStoreWithMiddleware(RootReducer);

export default WeatherStore;
