import React, { Component } from 'react';
import Title from './title';
import ErgosNav from './ergosNav';
import Dropdown from './dropdown';
import { getHeaderLinks, getHeaderOptions } from '../utils/';
import {
  Navbar, NavbarToggler, NavbarBrand, Collapse, Col
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
      <Navbar color="inverse" className="ergos-navbar" toggleable full fixed="top">
        <NavbarToggler right onClick={this.handleToggle} />
        <NavbarBrand href="/" className="ergos-navbar__item-first">
          <Title title={ title }/>
        </NavbarBrand>
        <Collapse isOpen={isOpen} navbar className="ergos-navbar__item-second">
          <ErgosNav linksList={ getHeaderLinks( linksList[ lang ])} />
          <Dropdown
            optionsList={ getHeaderOptions( optionsList )}
            value={ lang }
            propHandleChange={ this.handleChange } />
          </Collapse>
      </Navbar>
    )
  }
}
