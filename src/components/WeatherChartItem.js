import _ from 'lodash';
import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

class WeatherChartItem extends Component {
  average() {
    let data = this.props.data;
    return _.round(_.sum(data) / data.length);
  }

  title() {
    return `${this.average()} ${this.props.unit}`;
  }

  render() {
    return (
      <div>
        <Sparklines data={this.props.data} height={156}>
          <SparklinesLine color={this.props.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{this.title()}</div>
      </div>
    );
  }
}

export default WeatherChartItem;
