import React from 'react';
import Option from '../subComponents/option';
import Address from '../icons/placeholder';
import Mail from '../icons/mail';
import Phone from '../icons/phone';
import { NavItem, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const getHeaderLinks = ( propsLinksList ) => {
  return propsLinksList.map(( link, index ) => (
    <NavItem key={ index }>
      <Link to={ link.href } className="nav-link">
        { link.text }
      </Link>
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

  const getModalItems = ( propsitems ) => {
    return propsitems.map(( item, index ) => (
      <ListGroupItem key={ index }>
        <span className="key">{ item.key }</span> <span className="value">{ item.value }</span>
      </ListGroupItem>
    ));
  }

  const getImagesDataFor = ( pageName, items, url, legends ) => {
    const images = [];
    for ( let counter = 0; counter < items; counter ++ ) {
      const srcUrl = `${url}/${pageName}_${counter}.jpg`;
      const altAttr = `imagen ${counter} en ${pageName}`;
      images.push({srcUrl, altAttr});
    }
    return images.map(( item, index ) => (
      <div key={`div_${index}`}>
        <img key={`img_${index}`} src={item.srcUrl} alt={item.altAttr} />
        <p key={`legen_${index}`} className="legend">{legends[index]}</p>
      </div>
    ));
  };

export {
  getHeaderLinks,
  getHeaderOptions,
  getFooterListItems,
  getModalItems,
  getImagesDataFor
}
