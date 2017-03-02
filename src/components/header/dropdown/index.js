import React, { Component } from 'react';

export default class Dropdown extends Component {
  constructor( props ) {
    super( props );
    this.state = { value: 'cat' };

    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( event ) {
    console.log( event );
    this.setState({ value: event.target.value });
  }

  render() {
    return(
      <select
        value={this.state.value}
        onChange={ this.handleChange }
      >
        { this.props.optionsList }
      </select>
    );
  }
}
