import React, { Component } from 'react';
import Option from './option';

export default class Dropdown extends Component {
  constructor( props ) {
    super( props );
    this.state = { value: 'cat' };

    this.handleChange = this.handleChange.bind( this );
  }
  getOptions() {
    const options = [
      { value: 'es', text: 'Castellano' },
      { value: 'cat', text: 'Català' }
    ];

    return options.map(( opt, index ) => (
       <Option
          key={ index }
          optsValue={ opt.value }
          optsText={ opt.text }
        />
    ));
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
        { this.getOptions() }
      </select>
    );
  }
}
