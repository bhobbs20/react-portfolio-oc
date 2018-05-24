import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../styles/components/contact.css';
import '../styles/components/MapContainer.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapContainer extends Component {
    static defaultProps = {
        center: {
          lat: 42.7250918,
          lng: -70.9911659
        },
        zoom: 11
      };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'Add your api key here' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          <AnyReactComponent
            lat={42.7250918}
            lng={-70.9911659}
            text={'Brian Hobbs'}
          />
         </GoogleMapReact>
      </div>
    );
  }
}

export default MapContainer;