import React, { Component } from 'react';

export default class Dropdown extends Component {
  render() {
    const { propValue, propHandleChange, optionsList } = this.props;
    return(
      <select
        value={ propValue }
        onChange={ propHandleChange }
      >
        { optionsList }
      </select>
    );
  }
}
