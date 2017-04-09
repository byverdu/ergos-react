import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Loading from './components/subComponents/loading';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import * as Renderer from './components/utils/renderers';
import createBrowserHistory from 'history/createBrowserHistory'
import './App.css';

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
    this.servicesComponentParams = this.servicesComponentParams.bind( this );
    this.contactComponentParams = this.contactComponentParams.bind( this );
    this.successComponentParams = this.successComponentParams.bind( this );
    this.activitiesComponentParams = this.activitiesComponentParams.bind( this );
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

  activitiesComponentParams( data, activityContent, langText, langPath ) {
    const langValue = this.state.selectedOption.value
    return {
      componentName: 'activities',
      data,
      activityContent,
      langValue,
      langConfig: {
        text: langText,
        url: { pathname: langPath }
      },
      imgProps: false
    }
  }

  servicesComponentParams( data, langText, langPath ) {
    const langValue = this.state.selectedOption.value
    return {
      componentName: 'services',
      data,
      langValue,
      langConfig: {
        text: langText,
        url: { pathname: langPath }
      },
      imgProps: true
    }
  }

  contactComponentParams( data, langText, langPath ) {
    const langValue = this.state.selectedOption.value
    return {
      componentName: 'contact',
      data,
      langValue,
      langConfig: {
        text: langText,
        url: { pathname: langPath }
      },
      imgProps: false
    }
  }

  successComponentParams( data, langText, langPath ) {
    const langValue = this.state.selectedOption.value
    return {
      componentName: 'success',
      data,
      langValue,
      langConfig: {
        text: langText,
        url: { pathname: langPath }
      },
      imgProps: false
    }
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
        <div>
          <Container fluid>
            <Row>
              <Col xs="12">
                <Header data={ header } callbackParent={ this.onChildChanged }/>
              </Col>
            </Row>
          </Container>
          <Container fluid className="wrapper">
            <Row>
              <Col  className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 ergos-wrapper-content">
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

                {/* Activities Routes */}
                <Route
                  path="/activitats"
                  render={Renderer.activityComponent.bind(
                    this,
                    this.activitiesComponentParams( data, activityContent, 'cat', '/actividades' )
                  )}
                />
                <Route
                  path="/actividades"
                  render={Renderer.activityComponent.bind(
                    this,
                    this.activitiesComponentParams( data, activityContent, 'es', '/activitats' )
                  )}
                />

                {/* Services Routes */}
                <Route
                  path="/serveis"
                  render={Renderer.commonComponent.bind(
                    this,
                    this.servicesComponentParams( data, 'cat', '/servicios' )
                  )}
                />
                <Route
                  path="/servicios"
                  render={Renderer.commonComponent.bind(
                    this,
                    this.servicesComponentParams( data, 'es', '/serveis' )
                  )}
                />

                {/* Contact Routes */}
                <Route
                  path="/ergos-contacte"
                  render={Renderer.commonComponent.bind(
                    this,
                    this.contactComponentParams( data, 'cat', '/ergos-contacto' )
                  )}
                />
                <Route
                  path="/ergos-contacto"
                  render={Renderer.commonComponent.bind(
                    this,
                    this.contactComponentParams( data, 'es', '/ergos-contacte' )
                  )}
                />

                {/* Succes Routes */}
                <Route
                  path="/missatge-enviat"
                  render={Renderer.commonComponent.bind(
                    this,
                    this.successComponentParams( data, 'cat', '/mensaje-enviado' )
                  )}
                />
                <Route
                  path="/mensaje-enviado"
                  render={Renderer.commonComponent.bind(
                    this,
                    this.successComponentParams( data, 'es', '/missatge-enviat' )
                  )}
                />
              </Switch>
              </Col>
            </Row>
          </Container>
          <footer  className="bg-inverse ergos-footer container-fluid">
              <Footer data={ {footer, selectedOption} }/>
          </footer>
        </div>
    </Router>
    )
  }
}
