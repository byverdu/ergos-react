import React, { Component } from 'react';
import Title from './title';
import Logo from './logo';
import NavBar from './navbar';
import Dropdown from './dropdown';
import logo from '../media/logo.png';
import Link from '../subComponents/link';
import Option from '../subComponents/option';

export default class Header extends Component {
  constructor( props ) {
    super( props )
    this.state = props.data;
    console.log(this.state);
  }

  // NavBar links items
  getLinks( propsLinksList ) {
    return propsLinksList.map(( item, index ) => (
      <li key={ index }>
        <Link
          linkHref={ item.href }
          linkText={ item.text }
        />
    </li>
    ));
  }

  getOptions( propsOptionsList ) {
    return propsOptionsList.map(( opt, index ) => (
       <Option
          key={ index }
          optsValue={ opt.value }
          optsText={ opt.text }
        />
    ));
  }

  render() {
    const { title, altImg, linksList, optionsList } = this.state;
    return (
      <header>
        <Logo srcImg={ logo } altImg={ altImg } />
        <Title title={ title }/>
        <NavBar linksList={ this.getLinks( linksList ) } />
        <Dropdown optionsList={ this.getOptions( optionsList ) } />
      </header>
    )
  }
}
