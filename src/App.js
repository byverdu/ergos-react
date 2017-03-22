import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Loading from './components/subComponents/loading';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './routes/Home';
import Activities from './routes/Activities';
import Services from './routes/Services';

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

  homeRenderer() {
    return <Home data={this.state.content} />
  }

  activityRenderer() {
    return <Activities data={this.state.content} />
  }

  servicesRenderer() {
    return <Activities data={this.state.content} />
  }

  render() {
    const { header, footer } = this.state;
    if( !this.state.header.title ) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
    return (
      <Router>
        <Container fluid className="wrapper">
        <Row>
          <Col xs="12">
            <Header data={ header } />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Route
              exact
              path="/"
              render={this.homeRenderer.bind( this )}
            />
            <Route
              path="/activitats"
              render={this.activityRenderer.bind( this )}
            />
            <Route
              path="/serveis"
              render={this.servicesRenderer.bind( this )}
            />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Footer data={ footer }/>
          </Col>
        </Row>
      </Container>
    </Router>
    )
  }
}
