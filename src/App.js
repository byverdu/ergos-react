import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Loading from './components/subComponents/loading';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './routes/Home';
import Activities from './routes/Activities';
import Services from './routes/Services';
import Contact from './routes/Contact';
import Success from './routes/Success';

import * as Renderer from './components/utils/renderers';

export default class App extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      header: {},
      content: {},
      footer: {},
      contact: {},
      success: {},
      images: {},
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
          content: res.data.content,
          footer: res.data.footer,
          images: res.data.images,
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

  getContentForPage( pageProp ) {
    return this.state.content[ pageProp ][ this.state.selectedOption.value ];
  }

  getImagesForPage( pageProp ) {
    return this.state.images[ pageProp ].legends[ this.state.selectedOption.value ];
  }

  homeRenderer( images ) {
    const content = this.getContentForPage( 'index' );
    const legends = this.getImagesForPage( 'home' );
    return <Home data={content} images={images[ 'home' ]} legends={legends} />
  }

  servicesRenderer( images ) {
    const content = this.getContentForPage( 'services' );
    const legends = this.getImagesForPage( 'services' );
    return <Services data={ content } images={images[ 'services' ]} legends={legends}/>
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
    const { header, footer, images, selectedOption, activityContent, content  } = this.state;
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
                render={this.homeRenderer.bind( this, images )}
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
                render={this.servicesRenderer.bind( this, images )}
              />
              <Route
                path="/contacte"
                render={Renderer.contentForComponent.bind(
                  this,
                  'contact',
                  content,
                  selectedOption.value
                )}
              />
              <Route
                path="/success"
                render={Renderer.contentForComponent.bind(
                  this,
                  'success',
                  content,
                  selectedOption.value
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
