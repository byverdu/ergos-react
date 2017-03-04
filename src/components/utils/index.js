import React from 'react';
import Link from '../subComponents/link';
import Option from '../subComponents/option';
import Address from '../icons/placeholder';
import Mail from '../icons/mail';
import Phone from '../icons/phone';

const getHeaderLinks = ( propsLinksList ) => {
  return propsLinksList.map(( link, index ) => (
    <li key={ index }>
      <Link
        linkHref={ link.href }
        linkText={ link.text }
      />
  </li>
  ));
}

const getHeaderOptions = ( propsOptionsList ) => {
    return propsOptionsList.map(( opt, index ) => (
       <Option
          key={ index }
          optsValue={ opt.value }
          optsText={ opt.text }
        />
    ));
  }

  const getFooterListItems = ( propsItems ) => {
    const components = {
      address: Address,
      mail: Mail,
      phone: Phone
    }
    return propsItems.map(( item, index ) => {
      const IconComponent = components[ item.iconType ];
      return (
         <li key={ index }>
           <IconComponent />
           { item.text }
         </li>
      )
    });
  }

export {
  getHeaderLinks,
  getHeaderOptions,
  getFooterListItems
}
