import React, { Component, PropTypes } from 'react';

export default class Button extends Component {
  render() {
    const { propHandleClick, text } = this.props;
    return (
      <button onClick={ propHandleClick }>
        { text }
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  propHandleClick: PropTypes.func.isRequired
}
