import React from 'react'
import { Route, IndexRoute, RouteNotFound } from 'react-router'
import RequireAuth from './containers/auth/RequireAuth'
import SkipAuth from './containers/auth/SkipAuth'

import App from './components/App'
import Home from './containers/Home'
import Login from './components/Login'
import NewAccount from './components/NewAccount'
import Cart from './containers/Cart/Cart'
import WishList from './components/WishList'
import ProductDetail from './components/ProductDetail'
import NotFound from './components/NotFound'
import About from './components/About'
import SearchResult from './components/SearchResult'
import Test from './components/Test'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/test" component={Test}/>
    <Route path="/login" component={SkipAuth(Login)}/>
    <Route path="/account-create" component={SkipAuth(NewAccount)}/>
    <Route path="/cart" component={RequireAuth(Cart)}/>
    <Route path="/wish-list" component={RequireAuth(WishList)}/>
    <Route path="/product-detail" components={ProductDetail}/>
    <Route path="/about" components={About}/>
    <Route path="/search-result" components={SearchResult}/>
    <Route path="*" components={NotFound}/>
  </Route>
);
