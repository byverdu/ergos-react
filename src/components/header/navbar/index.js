import React, { Component, PropTypes } from 'react';

export default class NavBar extends Component {
  render() {
    const { linksList } = this.props;
    return (
      <nav>
        <ul>
          { linksList }
        </ul>
      </nav>
    );
  }
}

NavBar.propTypes = {
  linksList: PropTypes.array.isRequired
}
