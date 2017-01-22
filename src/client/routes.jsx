import React from 'react';
import { Route, IndexRoute, RouteNotFound } from 'react-router';
import RequireAuth from './containers/auth/RequireAuth';
import SkipAuth from './containers/auth/SkipAuth';

import App from './components/App';
import Home from './containers/Home';
import Login from './components/Login';
import NewAccount from './components/NewAccount';
import Cart from './containers/cart/Cart';
import WishList from './components/WishList';
import ProductDetail from './components/ProductDetail';
import NotFound from './components/NotFound';
import About from './components/About';
import SearchResult from './components/SearchResult';
import AdminHome from './containers/admin/Home';
import AdminProductDetail from './containers/admin/ProductDetail';
import Admin from './components/Admin';
import Test from './components/Test';

export default [
  <Route path="/admin" component={Admin}>
      <IndexRoute component={AdminHome}/>
      <Route path="product-detail" components={RequireAuth(AdminProductDetail)}/>
  </Route>,
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/test" component={Test}/>
    <Route path="/login" component={SkipAuth(Login)}/>
    <Route path="/account-create" component={NewAccount}/>
    <Route path="/cart" component={RequireAuth(Cart)}/>
    <Route path="/wish-list" component={RequireAuth(WishList)}/>
    <Route path="/product-detail" component={ProductDetail}/>
    <Route path="/about" component={About}/>
    <Route path="/search-result" component={SearchResult}/>
    <Route path="*" components={NotFound}/>
  </Route>
]
