import React, { Component } from 'react';
import { getFooterListItems } from '../utils';
import Button from '../subComponents/button';

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
        <Button text={ textButton } propHandleClick={ this.handleOnClick } />
      </div>
    );
  }
}
