import React, { Component, PropTypes } from 'react';

export default class Dropdown extends Component {
  render() {
    const { value, propHandleChange, optionsList } = this.props;
    return(
      <select
        className="ergos-header__select"
        value={ value }
        onChange={ propHandleChange }
      >
        { optionsList }
      </select>
    );
  }
}

Dropdown.propTypes = {
  value: PropTypes.string.isRequired,
  optionsList: PropTypes.array.isRequired,
  propHandleChange: PropTypes.func.isRequired
}
