import React, { Component } from 'react';
import Title from './title';
import Logo from './logo';
import ErgosNav from './ergosNav';
import Dropdown from './dropdown';
import logo from '../media/logo.png';
import { getHeaderLinks, getHeaderOptions } from '../utils/';
import {
  Navbar, NavbarToggler, NavbarBrand, Collapse
} from 'reactstrap';

export default class Header extends Component {
  constructor( props ) {
    super( props )
    this.state = props.data;
    console.log( this.state );

    this.handleChange = this.handleChange.bind( this );
    this.handleToggle = this.handleToggle.bind( this );
  }

  handleChange( event ) {
    console.log(  event.target.value , 'child' );
    this.props.callbackParent( event );
      this.setState({selectedOption : {
        value: event.target.value}})
  }

  handleToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { title, altImg, linksList, optionsList, isOpen } = this.state;
    const lang = this.state.selectedOption.value;
    return (
      <Navbar color="primary" light toggleable>
        <NavbarToggler right onClick={this.handleToggle} />
        <NavbarBrand href="/">
        <Logo srcImg={ logo } altImg={ altImg } />
          <Title title={ title }/>
        </NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <ErgosNav linksList={ getHeaderLinks( linksList[ lang ])} />
        </Collapse>
        <header>

          <Dropdown
            optionsList={ getHeaderOptions( optionsList )}
            value={ lang }
            propHandleChange={ this.handleChange } />
        </header>
      </Navbar>
    )
  }
}
