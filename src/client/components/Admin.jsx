import React, { Component } from 'react';
import Header from './admin/Header';
import Footer from './Footer'
import Navbar from './admin/Navigation';
require('./admin/admin.scss')

class Admin extends Component {
  render() {
    return (
      <div id="wrapper">
        <div className="page-wrapper admin-main">
          <Header/>
          <Navbar/>
          {this.props.children}
          <Footer/>
        </div>
      </div>
    )
  }
}

export default Admin;


