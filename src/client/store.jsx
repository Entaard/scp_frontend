import { configApi } from './configs/ApiConfig';
import { AUTH_USER } from './actions/AuthAction';
import reduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas/RootSaga'
import reducers from './reducers/RootReducer'
import { userFromLocal, isAuthenticated } from './utils/AuthUtils'

// Create store
const sagaMiddleware = createSagaMiddleware()
const middlewares = [reduxThunk, sagaMiddleware]
const store = createStore(
  reducers,
  applyMiddleware(...middlewares)
)
sagaMiddleware.run(sagas)

// Api Config
configApi();

// Auth Config
if (isAuthenticated()) {
  store.dispatch({ type: AUTH_USER, payload: userFromLocal() });
}

export default store;
