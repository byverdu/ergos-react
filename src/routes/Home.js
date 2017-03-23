import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import ErgosCarousel from '../components/carousel';
import Loading from '../components/subComponents/loading';
import ReactHtmlParser from 'react-html-parser';

export default class Home extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      content: this.props.data
    };
  }

  shouldComponentUpdate( nextProps, nextState ) {
    return nextProps.data !== this.state.content;
  }

  componentDidUpdate( nextProps, nextState ) {
    this.setState({content: nextProps.data})
  }

  render() {
    const { content } = this.state;
    if( !content ) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
    return (
      <Row>
        <Col xs="12">
          <ErgosCarousel />
          { ReactHtmlParser( content ) }
        </Col>
      </Row>
    );
  }
}
