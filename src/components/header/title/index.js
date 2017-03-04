import React, { Component, PropTypes } from 'react';

export default class Title extends Component {
  render() {
    const { title } = this.props;
    return (
      <h1>{ title }</h1>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired
}
