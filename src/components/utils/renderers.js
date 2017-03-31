import Home from '../../routes/Home'
import Activities from '../../routes/Activities';
import Services from '../../routes/Services';
import Contact from '../../routes/Contact';
import Success from '../../routes/Success';
import React from 'react';

const mappedComponents = {
  contact: Contact,
  success: Success
}

const contentForComponent = ( componentName, content, langType ) => {

  const props = content[ componentName ][ langType ];
  const TempComponent = mappedComponents[ componentName ];
  return (
    <TempComponent data={props} />
  )
}

export {
  contentForComponent
}
