import React, { Component, PropTypes } from 'react';

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

Dropdown.propTypes = {
  propValue: PropTypes.string.isRequired,
  optionsList: PropTypes.array.isRequired,
  propHandleChange: PropTypes.func.isRequired
}
