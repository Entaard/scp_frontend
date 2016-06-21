import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/SearchAction';
import { updateLoading } from '../actions/LoadingAction';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ""};
  }

  onTermChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.setState({term: ""});
    this.props.updateLoading(true);
    this.props.fetchWeather(this.state.term)
      .then(() => {
        this.props.updateLoading(false);
      })
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

export default connect(null, {fetchWeather, updateLoading})(SearchBar);
