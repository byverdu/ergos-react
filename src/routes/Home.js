import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from 'reactstrap';
import ErgosCarousel from '../components/carousel';
import ReactHtmlParser from 'react-html-parser';

export default class Home extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      content: {}
    };
  }

  componentDidMount() {
    axios.get(  './json/index.json' )
      .then(  res => {
        console.log( res.data );
        const responseData = {
          content: res.data.content
        };

      this.setState( responseData );
    });
  }

  render() {
    const { content } = this.state;
    return (
      <Row>
        <Col xs="12">
          <ErgosCarousel />
          { ReactHtmlParser( content.index ) }
        </Col>
      </Row>
    );
  }
}
