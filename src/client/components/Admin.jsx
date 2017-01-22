import React, {Component} from 'react';
import Header from './admin/Header';
import Footer from './Footer'

class Admin extends Component {
  render() {
    return (
        <div id="wrapper">
          <div className="page-wrapper">
            <Header/>
            {this.props.children}
            <Footer/>
          </div>
        </div>
    )
  }
}

export default Admin;


