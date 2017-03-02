import React from 'react';
import Link from '../subComponents/link';
import Option from '../subComponents/option';

const getLinks = ( propsLinksList ) => {
  return propsLinksList.map(( item, index ) => (
    <li key={ index }>
      <Link
        linkHref={ item.href }
        linkText={ item.text }
      />
  </li>
  ));
}

const getOptions = ( propsOptionsList ) => {
    return propsOptionsList.map(( opt, index ) => (
       <Option
          key={ index }
          optsValue={ opt.value }
          optsText={ opt.text }
        />
    ));
  }

export {
  getLinks,
  getOptions
}
