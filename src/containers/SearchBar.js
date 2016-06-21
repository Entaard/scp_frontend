import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/SearchAction';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  onTermChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.setState({ term: "" });
    this.props.fetchWeather(this.state.term);
  }

  render() {
    return (
      <form 
        className="input-group search-bar"
        onSubmit={this.onFormSubmit.bind(this)}>
        <input
          className="form-control"
          placeholder="Your favorite city"
          value={this.state.term} 
          onChange={this.onTermChange.bind(this)}
        />
        
        <span className="input-group-btn">
          <button 
            type="submit"
            className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather: fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
