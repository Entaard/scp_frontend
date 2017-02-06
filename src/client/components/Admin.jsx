import React, { Component } from 'react';
import Header from '../containers/admin/Header';
import Footer from './Footer'
import Navbar from './admin/Navigation';
require('./admin/admin.scss')

class Admin extends Component {
  render() {
    return (
      <div id="wrapper">
        <div className="page-wrapper admin-main">
          <Header/>
          <Navbar pathname={this.props.location.pathname}/>
          {this.props.children}
          <Footer/>
        </div>
      </div>
    )
  }
}

export default Admin;


