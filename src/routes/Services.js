import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../components/subComponents/loading';

export default class Services extends Component {
  constructor( props ) {
    super( props )

    this.state = this.props.data;
  }

  render() {
    const { services } = this.state;
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
          { ReactHtmlParser( services ) }
        </Col>
      </Row>
    );
  }
}
