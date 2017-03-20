import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Loading from '../components/subComponents/loading';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import ErgosCarousel from '../components/carousel';
import ReactHtmlParser from 'react-html-parser';

export default class App extends Component {
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
    const { header, content, footer } = this.state;
    if( !this.state.header.title ) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
    return (
      <Container fluid className="wrapper">
        <Row>
          <Col xs="12">
            <Header data={ header } />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <ErgosCarousel />
            { ReactHtmlParser( content.index ) }
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Footer data={ footer }/>
          </Col>
        </Row>
      </Container>
    );
  }
}
