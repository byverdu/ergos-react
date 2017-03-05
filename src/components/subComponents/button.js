import React, { Component, PropTypes } from 'react';
import { Button } from 'reactstrap';

export default class ErgosButton extends Component {
  render() {
    const { propHandleClick, text, color, outline } = this.props;
    return (
      <Button outline color={ color } onClick={ propHandleClick }>
        { text }
      </Button>
    );
  }
}

ErgosButton.propTypes = {
  text: PropTypes.string.isRequired,
  propHandleClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
}
