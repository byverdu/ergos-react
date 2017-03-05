import React from 'react';
import ErgosLink from '../subComponents/ergosLink';
import Option from '../subComponents/option';
import Address from '../icons/placeholder';
import Mail from '../icons/mail';
import Phone from '../icons/phone';
import { NavItem } from 'reactstrap';

const getHeaderLinks = ( propsLinksList ) => {
  return propsLinksList.map(( link, index ) => (
    <NavItem key={ index }>
      <ErgosLink
        linkHref={ link.href }
        linkText={ link.text }
      />
    </NavItem>
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
