import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import WeatherStore from './stores/WeatherStore';

ReactDOM.render(
  <Provider store={WeatherStore}>
    <App />
  </Provider>,
  document.querySelector(".container")
);
