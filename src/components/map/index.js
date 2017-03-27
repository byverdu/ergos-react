import React, { Component } from 'react';
import './map.css';
import loadGoogleMapsAPI from 'load-google-maps-api';

const ERGOS_COORDINATES = {
  lat: 41.404682,
  lng: 2.123773
}

export default class ErgosMap extends Component {
  constructor( props ) {
    super( props )
    this.state = {

    }
  }

  componentDidMount() {
    loadGoogleMapsAPI({key:'AIzaSyDE2XTOO3mc5CnZSdVG0xVfs8L9DidM__0'}).then( googleMaps => {
      this.map = new googleMaps.Map( this.refs.map, {
        center: ERGOS_COORDINATES,
        zoom: 11
      });
    }).catch( err => {
      console.error( err );
      this.map = 'Something went wrong loading the map'
    });
  }

  render() {
    return (
      <div ref="map" className="map-google"></div>
    )
  }
}
