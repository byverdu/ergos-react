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
      footer: {},
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
          selectedOption: {
            value: res.data.header.selectedOption.value
          }
        };

      this.setState( responseData );
    });
  }

  onChildChanged( event ) {
    this.setState({selectedOption : {
      value: event.target.value}})
    console.log( event.target.value, 'parent' );
  }

  homeRenderer() {
    return <Home data={this.state.content} />
  }

  activityRenderer() {
    return <Activities data={this.state.content} />
  }

  servicesRenderer() {
    const content = this.state.content.services[ this.state.selectedOption.value ]
    return <Services data={ content } />
  }

  render() {
    const { header, footer  } = this.state;
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



// class MyContainer extends React.Component {
//     constructor() {
//       super();
//       this.state = { checked: false }
//     }
//     onChildChanged(newState) {
//       this.setState({ checked: newState })
//     }
//     render() { return <div>
//       <div>Are you checked ? {this.state.checked ? 'yes' : 'no'}</div>
//         <ToggleButton text="Toggle me"
//                       initialChecked={this.state.checked}
//                       callbackParent={(newState) => this.onChildChanged(newState) } />
//       </div>
//     }
// }

// class ToggleButton extends React.Component {
//   constructor({ initialChecked }) {
//     super();
//     this.state = { checked: initialChecked }
//   }
//   onTextChanged() {
//     const newState = !this.state.checked;
//     this.setState({ checked: newState }); // we update our state
//     this.props.callbackParent(newState); // we notify our parent
//   }
//   render() {
//     return <label>{this.props.text}: <input type="checkbox"
//                                             checked={this.state.checked}
//                                             onChange={() => this.onTextChanged()}/></label>
//   }
// }
