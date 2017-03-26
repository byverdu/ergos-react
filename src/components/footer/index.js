import React, { Component } from 'react';
import { getFooterListItems } from '../utils';
import ErgosModal from '../modal'

export default class Footer extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      data: props.data.footer,
      lang: props.data.selectedOption.value
    };
  }

  componentWillReceiveProps( nextProps ) {
    if ( this.state.lang !== nextProps.data.selectedOption.value ) {
      this.setState({
        lang: nextProps.data.selectedOption.value
      });
    }
  }

  render() {
    const { listItems, infoTextBtn, modal } = this.state.data;
    const lang = this.state.lang;
    return(
      <div>
        <ul>
          { getFooterListItems( listItems ) }
        </ul>
        <ErgosModal modalData={ modal[ lang ] } infoTextBtn={ infoTextBtn } />
      </div>
    );
  }
}
