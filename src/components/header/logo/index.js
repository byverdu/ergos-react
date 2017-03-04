import React, { Component, PropTypes } from 'react';

export default class Logo extends Component {
  render() {
    const { srcImg, altImg } = this.props;
    return (
      <img src={ srcImg } alt={ altImg } />
    )
  }
}

Logo.propTypes = {
  srcImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired
}
