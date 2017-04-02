import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Loading from './components/subComponents/loading';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import * as Renderer from './components/utils/renderers';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();

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
      <Router history={history}>
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
                path="/activitats"
                render={Renderer.activityComponent.bind(
                  this,
                  'activities',
                  data,
                  selectedOption.value,
                  activityContent,
                  {text: 'cat', url: {pathname: '/actividades'}}
                )}
              />

              <Route
                path="/actividades"
                render={Renderer.activityComponent.bind(
                  this,
                  'activities',
                  data,
                  selectedOption.value,
                  activityContent,
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
