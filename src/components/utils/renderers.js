import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from '../../routes/Home'
import Activities from '../../routes/Activities';
import Services from '../../routes/Services';
import Contact from '../../routes/Contact';
import Success from '../../routes/Success';

const mappedComponents = {
  contact: Contact,
  success: Success,
  home: Home
}

const homeComponent = ( componentName, data, langValue ) => {
  const TempComponent = mappedComponents[ componentName ];
  const props = {
    content: data[ componentName ][ "content" ][ langValue ],
    images: data[ componentName ][ "images" ],
    legends: data[ componentName ][ "images" ][ "legends" ][ langValue ]
  }

  return ( <TempComponent data={props} /> );
}


const commonComponent = ( componentName, data, langValue, langConfig, extraProps ) => {

  const props = data[ "content" ][ componentName ][ langValue ];
  const TempComponent = mappedComponents[ componentName ];

  if ( extraProps ) {
    Object.assign( props, extraProps );
  }

  return langValue === langConfig.text
    ? ( <TempComponent data={props} /> )
    : ( <Redirect to={`${langConfig.url.pathname}`} /> )
}

export {
  homeComponent,
  commonComponent
}
