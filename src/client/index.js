import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { useScroll } from 'react-router-scroll'
import store from './store'
import routes from './routes'
require('./styles/app.scss')

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={syncHistoryWithStore(browserHistory, store)}
      render={applyRouterMiddleware(useScroll())}>
      {routes}
    </Router>
  </Provider>,
  document.querySelector(".scp-main")
);
