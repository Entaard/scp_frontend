import React, { Component } from 'react';
import Header from '../containers/admin/Header';
import Footer from './Footer'
import Navbar from './admin/Navigation';

import {connect} from 'react-redux'
require('./admin/admin.scss')

class Admin extends Component {
  render() {
    return (
      <div id="wrapper">
        <div className="page-wrapper admin-main">
          {this.props.authenticated && <Header/>}
          {this.props.authenticated && <Navbar pathname={this.props.location.pathname}/>}
          {this.props.children}
          <Footer/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    user: state.auth.user,
  }
}

export default connect(mapStateToProps)(Admin);


