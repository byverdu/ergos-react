import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../components/subComponents/loading';

export default class Services extends Component {
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
          { ReactHtmlParser( content )}
        </Col>
      </Row>
    );
  }
}
