import React, { Component, PropTypes } from 'react';

export default class Logo extends Component {
  render() {
    const { srcImg, altImg } = this.props;
    return (
      <img width="100" height="100" src={ srcImg } alt={ altImg } />
    )
  }
}

Logo.propTypes = {
  srcImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired
}
