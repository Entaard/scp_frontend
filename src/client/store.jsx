import reducers from './reducers/RootReducer'
import reduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const storeWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = storeWithMiddleware(reducers);

// Other configs here

export default store;
