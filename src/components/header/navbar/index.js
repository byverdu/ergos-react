import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          { this.props.linksList }
        </ul>
      </nav>
    );
  }
}
