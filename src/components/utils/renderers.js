import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from '../../routes/Home'
import Activities from '../../routes/Activities';
import Services from '../../routes/Services';
import Contact from '../../routes/Contact';
import Success from '../../routes/Success';

const mappedComponents = {
  contact: Contact,
  success: Success
}

const contentForComponent = ( componentName, content, langValue, langConfig ) => {

  const props = content[ componentName ][ langValue ];
  const TempComponent = mappedComponents[ componentName ];

    return langValue === langConfig.text
    ? ( <TempComponent data={props} /> )
    : ( <Redirect to={`${langConfig.url.pathname}`} /> )
}

export {
  contentForComponent
}
