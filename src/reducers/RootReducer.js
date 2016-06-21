import { combineReducers } from 'redux';
import WeatherReducer from './WeatherReducer';
import LoadingReducer from './LoadingReducer';

const RootReducer = combineReducers({
  weather: WeatherReducer,
  loading: LoadingReducer
});

export default RootReducer;
