import React, { Component } from 'react';
import Title from './title';
import Logo from './logo';
import NavBar from './navbar';
import Dropdown from './dropdown';
import logo from '../media/logo.png';
import * as headerUtils from '../utils/header';

export default class Header extends Component {
  constructor( props ) {
    super( props )
    this.state = props.data;
    console.log(this.state);
  }

  render() {
    const { title, altImg, linksList, optionsList } = this.state;
    return (
      <header>
        <Logo srcImg={ logo } altImg={ altImg } />
        <Title title={ title }/>
        <NavBar linksList={ headerUtils.getLinks( linksList ) } />
        <Dropdown optionsList={ headerUtils.getOptions( optionsList ) } />
      </header>
    )
  }
}
