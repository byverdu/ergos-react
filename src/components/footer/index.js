import React, { Component } from 'react';
import { getFooterListItems } from '../utils';
import ErgosModal from '../modal'

export default class Footer extends Component {
  constructor( props ) {
    super( props );

    this.state = props.data;
    this.handleOnClick = this.handleOnClick.bind( this );
  }

  handleOnClick() {
    window.alert( 'xoxoxoxoxo' );
  }

  render() {
    const { listItems, textButton } = this.state;
    return(
      <div>
        <ul>
          { getFooterListItems( listItems ) }
        </ul>
        <ErgosModal buttonLabel={ textButton } />
      </div>
    );
  }
}
