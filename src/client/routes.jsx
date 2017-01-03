import React from 'react'
import { Route, IndexRoute, RouteNotFound } from 'react-router'
import RequireAuth from './containers/auth/RequireAuth'
import SkipAuth from './containers/auth/SkipAuth'

import App from './components/App'
import Home from './containers/Home'
import Login from './components/Login'
import NewAccount from './components/NewAccount'
import Cart from './components/Cart'
import WishList from './components/WishList'
import Test from './components/Test'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/test" component={Test}/>
    <Route path="/login" component={SkipAuth(Login)}/>
    <Route path="/account-create" component={SkipAuth(NewAccount)}/>
    <Route path="/cart" component={RequireAuth(Cart)}/>
    <Route path="/wish-list" component={RequireAuth(WishList)}/>
  </Route>
);
