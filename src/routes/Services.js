import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../components/subComponents/loading';

export default class Services extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      services: this.props.data.content.services,
      selectedOption: this.props.data.selectedOption
    }
  }

  render() {
    const { services, selectedOption } = this.state;
    if( !services ) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
    return (
      <Row>
        <Col xs="12">
          { ReactHtmlParser( services[ selectedOption ])}
        </Col>
      </Row>
    );
  }
}
