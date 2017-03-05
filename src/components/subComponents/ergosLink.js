import React, { Component } from 'react';
import { NavLink } from 'reactstrap';

export default class ErgosLink extends Component {
  render() {
    return (
      <NavLink href={ this.props.linkHref }>
        { this.props.linkText }
      </NavLink>
    );
  }
}
