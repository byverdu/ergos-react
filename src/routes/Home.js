import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import ErgosCarousel from '../components/carousel';
import Loading from '../components/subComponents/loading';
import ReactHtmlParser from 'react-html-parser';

export default class Home extends Component {
  constructor( props ) {
    super( props )

    this.state = this.props.data;
  }

  render() {
    const { index } = this.state;
    if( !index ) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
    return (
      <Row>
        <Col xs="12">
          <ErgosCarousel />
          { ReactHtmlParser( index ) }
        </Col>
      </Row>
    );
  }
}
