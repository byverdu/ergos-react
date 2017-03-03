import React, { Component } from 'react';
import { getFooterListItems } from '../utils'

export default class Footer extends Component {
  constructor( props ) {
    super( props );

    this.state = props.data;
  }

  render() {
    const { listItems } = this.state;
    return(
      <div>
        <ul>
          { getFooterListItems( listItems ) }
        </ul>
      </div>
    );
  }
}
