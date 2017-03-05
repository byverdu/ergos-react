import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Loading from './components/subComponents/loading';
import './App.css';
import axios from 'axios';
import { Container } from 'reactstrap';

export default class App extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      header: {},
      footer: {}
    };
  }

  componentDidMount() {
    axios.get(  './json/index.json' )
      .then(  res => {
        console.log( res.data );
        const responseData = {
          header: res.data.header,
          footer: res.data.footer
        };

      this.setState( responseData );
    });
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
      <Container fluid>
        <Header data={ header }/>
        <Footer data={ footer }/>
      </Container>
    );
  }
}
