import React, { Component } from 'react';
import Title from './title';
import Logo from './logo';
import ErgosNav from './ergosNav';
import Dropdown from './dropdown';
import logo from '../media/logo.png';
import { getHeaderLinks, getHeaderOptions } from '../utils/';
import {
  Row, Col, Navbar, NavbarToggler, NavbarBrand, Collapse
} from 'reactstrap';

export default class Header extends Component {
  constructor( props ) {
    super( props )
    this.state = props.data;
    console.log( this.state );

    this.handleChange = this.handleChange.bind( this );
    this.toggle = this.toggle.bind( this );
  }

  handleChange( event ) {
    console.log( event );
    this.setState({ value: event.target.value });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { title, altImg, linksList, optionsList, selectedOption, isOpen } = this.state;
    return (
      <Row>
        <Col md="2"></Col>
        <Col xs="12" md="8">
          <Navbar color="primary" light toggleable>
            <NavbarToggler right onClick={this.toggle} />
            <NavbarBrand href="/">
            <Logo srcImg={ logo } altImg={ altImg } />
              <Title title={ title }/>
            </NavbarBrand>
            <Collapse isOpen={isOpen} navbar>
              <ErgosNav linksList={ getHeaderLinks( linksList ) } />
            </Collapse>
            <header>

              <Dropdown optionsList={ getHeaderOptions( optionsList ) } propValue={ selectedOption.value } propHandleChange={ this.handleChange } />
            </header>
          </Navbar>
        </Col>
        <Col md="2"></Col>
      </Row>
    )
  }
}
