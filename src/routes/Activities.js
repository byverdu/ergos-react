import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../components/subComponents/loading';

export default class Activities extends Component {
  constructor( props ) {
    super( props )

    this.state = this.props.data;
  }

  render() {
    const { activity } = this.state;
    if( !activity ) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
    return (
      <Row>
        <Col xs="12">
          { ReactHtmlParser( activity ) }
        </Col>
      </Row>
    );
  }
}
