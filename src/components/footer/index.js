import React, { Component } from 'react';
import { getFooterListItems } from '../utils';
import ErgosModal from '../modal'

export default class Footer extends Component {
  constructor( props ) {
    super( props );

    this.state = props.data;
  }

  render() {
    const { listItems, textBtn, modal } = this.state;
    return(
      <div>
        <ul>
          { getFooterListItems( listItems ) }
        </ul>
        <ErgosModal modalData={ modal } buttonLabel={ textBtn } />
      </div>
    );
  }
}
