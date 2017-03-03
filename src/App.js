import React, { Component } from 'react';
import Header from './components/header';
import Loading from './components/subComponents/loading';
import './App.css';
import axios from 'axios';

export default class App extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      header: {}
    };
  }

  componentDidMount() {
    axios.get(  './json/index.json' )
      .then(  res => {
        console.log( res.data );
        const responseData = {
          header: res.data.header
        };

      this.setState( responseData );
    });
  }

  render() {
    const { header } = this.state;
    if( !this.state.header.title ) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
    return (
      <div>
        <Header data={ header }/>
      </div>
    );
  }
}
