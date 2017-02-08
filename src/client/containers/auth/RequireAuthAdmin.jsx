import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function(ComposedComponent) {
  class RequireAuthAdmin extends Component {
    componentWillMount() {
      this.checkAuthentication(this.props.authenticated);
    }

    componentWillUpdate(newProps) {
      this.checkAuthentication(newProps.authenticated);
    }

    checkAuthentication(authenticated) {
      if (!authenticated && this.props.location.pathname !== "/admin/login") {
        browserHistory.push("/admin/login");
      }
    }

    render() {
      return <ComposedComponent { ...this.props } />
    }
  }

  function mapStateToProps(state) {
    return {
      user: state.auth.user,
      authenticated: state.auth.authenticated
    };
  }

  return connect(mapStateToProps)(RequireAuthAdmin);
}
