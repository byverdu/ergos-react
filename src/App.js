import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Loading from './components/subComponents/loading';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import * as Renderer from './components/utils/renderers';

import Activities from './routes/Activities';

export default class App extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      header: {},
      data: {},
      footer: {},
      contact: {},
      success: {},
      activityContent: {},
      selectedOption: {value: ""}
    };
    this.onChildChanged = this.onChildChanged.bind( this );
  }

  componentDidMount() {
    axios.get(  './json/index.json' )
      .then(  res => {
        console.log( res.data );
        const responseData = {
          header: res.data.header,
          data: res.data.data,
          footer: res.data.footer,
          activityContent: res.data.activityContent,
          selectedOption: {
            value: res.data.header.selectedOption.value
          }
        };

      this.setState( responseData );
    });
  }

  onChildChanged( event ) {
    this.setState({
      selectedOption : {
        value: event.target.value
      }
    });
  }

  activityRenderer( langConf, routeProps ) {
    const lang = this.state.selectedOption.value;
    return lang === langConf.text
    ? <Activities
        {...routeProps}
        data={this.getContentForPage( 'activities' )}
        activityContent={this.state.activityContent}
        lang={lang}
      />
    : <Redirect to={`${langConf.url.pathname}`} />
  }

  render() {
    const { header, footer, selectedOption, activityContent, data  } = this.state;
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
            <Header data={ header } callbackParent={ this.onChildChanged }/>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Switch>
              <Route
                exact
                path="/"
                render={Renderer.homeComponent.bind(
                  this,
                  'home',
                  data,
                  selectedOption.value
                )}
              />
              <Route
                path='/activitats'
                render={this.activityRenderer.bind(
                  this,
                  {text: 'cat', url: {pathname: '/actividades'}}
                )}
              />

              <Route
                path='/actividades'
                render={this.activityRenderer.bind(
                  this,
                  {text: 'es', url: {pathname: '/activitats'}}
                )}
              />

              <Route
                path="/serveis"
                render={Renderer.commonComponent.bind(
                  this,
                  'services',
                  data,
                  selectedOption.value,
                  {text: 'cat', url: {pathname: '/servicios'}},
                  true
                )}
              />

              <Route
                path="/servicios"
                render={Renderer.commonComponent.bind(
                  this,
                  'services',
                  data,
                  selectedOption.value,
                  {text: 'es', url: {pathname: '/serveis'}},
                  true
                )}
              />

              <Route
                path="/ergos-contacte"
                render={Renderer.commonComponent.bind(
                  this,
                  'contact',
                  data,
                  selectedOption.value,
                  {text: 'cat', url: {pathname: '/ergos-contacto'}}
                )}
              />
              <Route
                path="/ergos-contacto"
                render={Renderer.commonComponent.bind(
                  this,
                  'contact',
                  data,
                  selectedOption.value,
                  {text: 'es', url: {pathname: '/ergos-contacte'}}
                )}
              />
              <Route
                path="/missatge-enviat"
                render={Renderer.commonComponent.bind(
                  this,
                  'success',
                  data,
                  selectedOption.value,
                  {text: 'cat', url: {pathname: '/mensaje-enviado'}}
                )}
              />
              <Route
                path="/mensaje-enviado"
                render={Renderer.commonComponent.bind(
                  this,
                  'success',
                  data,
                  selectedOption.value,
                  {text: 'es', url: {pathname: '/missatge-enviat'}}
                )}
              />
            </Switch>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Footer data={ {footer, selectedOption} }/>
          </Col>
        </Row>
      </Container>
    </Router>
    )
  }
}
