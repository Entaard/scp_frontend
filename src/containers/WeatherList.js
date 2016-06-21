import { connect } from 'react-redux';
import React, { Component } from 'react';
import WeatherItem from '../components/WeatherItem';
import WeatherStore from '../stores/WeatherStore';

class WeatherList extends Component {
  renderList() {
    return this.props.weather.map((weather) => {
      return (
        <WeatherItem weather={weather} key={weather.city.id} />
      );
    });
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.renderList()}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
