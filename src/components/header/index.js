import React, { Component } from 'react';
import Title from './title';
import Logo from './logo';
import NavBar from './navbar';
import Dropdown from './dropdown';

export default class Header extends Component {
  render() {
    return (
      <header>
        <Logo />
        <Title name="Residència Ergos" />
        <NavBar />
        <Dropdown />
      </header>
    )
  }
}
