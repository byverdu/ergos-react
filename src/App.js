import React, { Component } from 'react';
// import Header from '../components/header';
// import Footer from '../components/footer';
// import Loading from '../components/subComponents/loading';
// import './App.css';
// import axios from 'axios';
// import { Container, Row, Col } from 'reactstrap';
// import ErgosCarousel from '../components/carousel';
// import ReactHtmlParser from 'react-html-parser';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './routes/Home';
import Activities from './routes/Activities';

export default class App extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      header: {},
      content: {},
      footer: {}
    };
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/activities">Activities</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/activities" component={Activities}/>
       </div>
      </Router>
    )
  }
}
