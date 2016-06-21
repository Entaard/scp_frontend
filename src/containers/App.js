import React, { Component } from 'react';
import SearchBar from './SearchBar';
import WeatherList from './WeatherList';
import Loading from './Loading';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <div className={this.props.loading && "loading-blur"}>
          <SearchBar />
          <WeatherList />
        </div>
        <Loading />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading
  };
}

export default connect(mapStateToProps)(App);
