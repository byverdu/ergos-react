import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';

export default class Activities extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      header: {},
      content: {},
      footer: {}
    };
  }

  componentDidMount() {
    axios.get(  './json/index.json' )
      .then(  res => {
        console.log( res.data );
        const responseData = {
          header: res.data.header,
          content: res.data.content,
          footer: res.data.footer
        };

      this.setState( responseData );
    });
  }

  render() {
    const { content } = this.state;
    return (
      <Row>
        <Col xs="12">
          { ReactHtmlParser( content.activity ) }
        </Col>
      </Row>
    );
  }
}
