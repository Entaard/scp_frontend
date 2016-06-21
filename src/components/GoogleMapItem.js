import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

class GoogleMapItem extends Component {
  render() {
    let city = this.props.city;
    return (
      <GoogleMapLoader
        containerElement={
          <div style={{height: "100%"}} />
        }
        googleMapElement={
          <GoogleMap
            defaultZoom={12}
            defaultCenter={{lat: city.coord.lat, lng: city.coord.lon}}
          />
        }
      />
    );
  }
}

export default GoogleMapItem;
