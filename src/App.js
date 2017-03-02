import React, { Component } from 'react';
import Header from './components/header';
import './App.css';

class App extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      header: {
        title: 'Residencia Ergos',
        altImg: 'logo residencia ergos',
        linksList: [
          {href: 'http://google.es', text: 'Google'},
          {href: 'http://sport.es', text: 'Sport'},
          {href: 'http://marca.es', text: 'Marca'}
        ],
        optionsList: [
          { value: 'es', text: 'Castellano' },
          { value: 'cat', text: 'Català' }
        ],
        selectedOption: {
          value: 'cat'
        }
      }
    };
  }
  render() {
    return (
      <div>
        <Header data={this.state.header}/>
      </div>
    );
  }
}

export default App;
