import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
class MapContainer extends Component {
  state = {
    selectedPlace: {
      name: "Tokyo"
    }
  };
  render() {
    return (
      <Map
        style={{ width: "100%", height: "500px" }}
        google={this.props.google}
        // initialCenter={{
        //   lat: 40.854885,
        //   lng: -88.081807
        // }}
        zoom={14}
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAyD6cKed6FXl4rIqJnsGdKh9Uq4-WLRpA"
})(MapContainer);
