import React, { Component } from 'react';
import { getFooterListItems } from '../utils';
import ErgosModal from '../modal'
import { Row } from 'reactstrap';

export default class Footer extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      data: props.data.footer,
      lang: props.data.selectedOption.value,
      copy: new Date().getFullYear()
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
      <Row>
        <div className="ergos-footer__list col-md-4 col-sm-12">
          <ul>
            { getFooterListItems( listItems ) }
          </ul>
        </div>
        <div className="ergos-footer__copy col-6 col-md-4 col-sm-6">
          <span>&copy; {this.state.copy}</span>
        </div>
        <div className="ergos-footer__info col-6 col-md-4 col-sm-6">
          <ErgosModal modalData={ modal[ lang ] } infoTextBtn={ infoTextBtn } />
        </div>
      </Row>
    );
  }
}
