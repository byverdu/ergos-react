import React, { Component } from 'react';
import './map.css';
import loadGoogleMapsAPI from 'load-google-maps-api';
import * as Map from './constants';

const mapOptions = {
  center: Map.COORDINATES,
  zoom: 16,
  mapTypeControlOptions: {
      mapTypeIds: [ 'roadmap', 'satellite', 'hybrid', 'terrain', 'Retro' ]
  }
};

const markerOptions = ( googleMaps, map ) => {
  return {
    position: Map.COORDINATES,
    map: map,
    title: 'Residencia Ergos',
    animation: googleMaps.Animation.BOUNCE
  }
};

export default class ErgosMap extends Component {
  componentDidMount() {
    loadGoogleMapsAPI( Map.API_CONFIG ).then( googleMaps => {
      this.map = new googleMaps.Map( this.refs.map, mapOptions );

      const newStyleMap = new googleMaps.StyledMapType( Map.STYLES, {name: 'Retro'});
      const marker = new googleMaps.Marker( markerOptions( googleMaps, this.map ));

      this.map.mapTypes.set( 'Retro', newStyleMap );
      this.map.setMapTypeId( 'Retro' );

      Map.resetMarkerAnimation( marker );

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
