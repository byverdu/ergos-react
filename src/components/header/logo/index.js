import React, { Component } from 'react';

export default class Logo extends Component {
  render() {
    const { srcImg, altImg } = this.props;
    return (
      <img src={ srcImg } alt={ altImg } />
    )
  }
}
