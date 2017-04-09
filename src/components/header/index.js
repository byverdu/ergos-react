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

    this.handleChange = this.handleChange.bind( this );
    this.handleToggle = this.handleToggle.bind( this );
    this.onClickHandler = this.onClickHandler.bind( this );
  }

  handleChange( event ) {
    this.props.callbackParent( event );
      this.setState({
        selectedOption : {
          value: event.target.value
        },
        isOpen: !this.state.isOpen
      })
  }

  handleToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onClickHandler() {
    if ( this.state.isOpen ) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }

  render() {
    const { title, altImg, linksList, optionsList, isOpen } = this.state;
    const lang = this.state.selectedOption.value;
    return (
      <Navbar className="ergos-navbar" toggleable full fixed="top">
        <NavbarToggler right onClick={this.handleToggle} />
        <NavbarBrand href="/" className="ergos-navbar__item-first">
          <Title title={ title }/>
        </NavbarBrand>
        <Collapse isOpen={isOpen} navbar className="ergos-navbar__item-second">
          <ErgosNav linksList={ getHeaderLinks( linksList[ lang ], this.onClickHandler )} />
          <Dropdown
            optionsList={ getHeaderOptions( optionsList )}
            value={ lang }
            propHandleChange={ this.handleChange } />
          </Collapse>
      </Navbar>
    )
  }
}
