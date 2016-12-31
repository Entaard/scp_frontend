import React, { Component } from 'react';
import { Link } from 'react-router'

class Test extends Component {
  render() {
    return (
      <div id="wrapper">
        <Link to="/">
          Click me
        </Link>
      </div>
    )
  }
}

export default Test;


