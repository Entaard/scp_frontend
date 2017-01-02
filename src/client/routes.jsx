import React from 'react'
import { Route, IndexRoute, RouteNotFound } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Login from './components/Login'
import NewAccount from './components/NewAccount'
import Cart from './components/Cart'
import WishList from './components/WishList'
import Test from './components/Test'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/test" component={Test}/>
    <Route path="/login" component={Login}/>
    <Route path="/cart" component={Cart}/>
    <Route path="/wish-list" component={WishList}/>
    <Route path="/account-create" component={NewAccount} />
  </Route>
);
