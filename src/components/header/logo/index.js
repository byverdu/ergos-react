import React, { Component } from 'react';

export default class Logo extends Component {
  render() {
    return (
      <img src={ this.props.srcImg } alt={ this.props.altImg } />
    )
  }
}
