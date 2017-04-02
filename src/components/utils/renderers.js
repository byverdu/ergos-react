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
  home: Home,
  services: Services,
  activities: Activities
}

const propsForImages = ( componentName, data, langValue ) => {
  return {
    images: data[ componentName ][ "images" ],
    legends: data[ componentName ][ "images" ][ "legends" ][ langValue ]
  }
}

const homeComponent = ( componentName, data, langValue ) => {
  const TempComponent = mappedComponents[ componentName ];
  const props = {
    content: data[ componentName ][ "content" ][ langValue ]
  };

  Object.assign( props, propsForImages( componentName, data, langValue ));

  return ( <TempComponent data={props} /> );
}

const commonComponent = ( componentName, data, langValue, langConfig, imgProps ) => {

  const props = {
    content: data[ componentName ][ "content" ][ langValue ]
  };
  const TempComponent = mappedComponents[ componentName ];

  if ( imgProps ) {
    Object.assign( props, propsForImages( componentName, data, langValue ));
  }

  return langValue === langConfig.text
    ? ( <TempComponent data={props} /> )
    : ( <Redirect to={`${langConfig.url.pathname}`} /> )
}

const activityComponent = ( componentName, data, langValue, activityContent, langConfig, routeProps ) => {
  const props = {
    content: data[ componentName ][ "content" ][ langValue ],
    activityContent,
    langValue
  };
  const TempComponent = mappedComponents[ componentName ];

  return langValue === langConfig.text
    ? ( <TempComponent
          {...routeProps}
          data={props}
      /> )
    : ( <Redirect to={`${langConfig.url.pathname}`} /> )
}

export {
  homeComponent,
  commonComponent,
  activityComponent
}
