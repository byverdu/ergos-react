import React, { Component, PropTypes } from 'react';
import { Nav } from 'reactstrap';

export default class ErgosNav extends Component {
  render() {
    const { linksList } = this.props;
    return (
      <Nav className="ml-auto" navbar>
        { linksList }
      </Nav>
    );
  }
}

ErgosNav.propTypes = {
  linksList: PropTypes.array.isRequired
}
