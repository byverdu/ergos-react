import React, { Component } from 'react';
import Title from './title';
import Logo from './logo';

export default class Header extends Component {
  render() {
    return (
      <header>
        <Logo />
        <Title name="Residència Ergos" />
      </header>
    )
  }
}
