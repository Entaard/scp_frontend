import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router';

export class BreadCrumbs extends Component {

  render() {
    return (
        <ul className="breadcrumbs">
          <li><IndexLink to="/"><i className="icon icon-home"></i></IndexLink></li>
          <li>/<span>Shopping Cart</span></li>
        </ul>
    )
  }
}
export default BreadCrumbs;
