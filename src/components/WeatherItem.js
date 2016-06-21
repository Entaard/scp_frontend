import React, { Component } from 'react';
import WeatherChartItem from './WeatherChartItem';
import GoogleMapItem from './GoogleMapItem';

class WeatherItem extends Component {
  temperatures() {
    return this.props.weather.list.map((data) => {
      return data.main.temp;
    });
  }

  pressures() {
    return this.props.weather.list.map((data) => {
      return data.main.pressure;
    });
  }

  humidities() {
    return this.props.weather.list.map((data) => {
      return data.main.humidity;
    });
  }

  chartContent() {
    return [
      {data: this.temperatures(), color: "orange", unit: "K"},
      {data: this.pressures(), color: "green", unit: "hPa"},
      {data: this.humidities(), color: "blue", unit: "%"},
    ];
  }

  renderGoogleMap() {
    return (
      <td>
        <GoogleMapItem city={this.props.weather.city}/>
      </td>
    );
  }

  renderListChart() {
    return this.chartContent().map((item) => {
      return (
        <td key={item.unit}>
          <WeatherChartItem
            data={item.data}
            color={item.color}
            unit={item.unit}
          />
        </td>
      );
    });
  }

  render() {
    return (
      <tr>
        {this.renderGoogleMap()}
        {this.renderListChart()}
      </tr>
    );
  }
}

export default WeatherItem;
