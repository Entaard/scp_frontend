import React, {Component} from 'react';
import Header from './Header';
import Footer from '../../components/Footer'
import Navbar from '../../components/admin/Navigation';
import {GET_CATEGORIES} from '../../actions/CategoryAction'
import {createAction} from '../../utils/SagaUtils'
import {connect} from 'react-redux'
require('./../../components/admin/admin.scss')

class Admin extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getCategories();
  }

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

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  user: state.auth.user,
})

const mapDispatchToProps = (dispatch) => ({
  getCategories: createAction(GET_CATEGORIES, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin);


