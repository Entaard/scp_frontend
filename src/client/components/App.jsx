import React, {Component} from 'react';
import Header from '../containers/header/Header';
import Footer from './Footer'

class App extends Component {
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

export default App;


