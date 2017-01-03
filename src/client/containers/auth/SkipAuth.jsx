import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isLinking } from '../../utils/AuthUtils'
import { browserHistory } from 'react-router';

export default function(ComposedComponent) {
  class SkipAuth extends Component {
    componentWillMount() {
      this.checkAuthentication(this.props.authenticated);
    }

    componentWillUpdate(newProps) {
      this.checkAuthentication(newProps.authenticated);
    }

    checkAuthentication(authenticated) {
      if (authenticated && !isLinking()) {
        browserHistory.push("/");
      }
    }

    render() {
      return <ComposedComponent { ...this.props } />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(SkipAuth);
}
