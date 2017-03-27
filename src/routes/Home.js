import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'reactstrap';
import ErgosCarousel from '../components/carousel';
import Loading from '../components/subComponents/loading';
import ReactHtmlParser from 'react-html-parser';

export default class Home extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      content: this.props.data,
      images: this.props.images,
      pageName: 'home'
    };
  }

  shouldComponentUpdate( nextProps, nextState ) {
    return nextProps.data !== this.state.content;
  }

  componentDidUpdate( nextProps, nextState ) {
    this.setState({content: nextProps.data})
  }

  render() {
    const { content, images, pageName } = this.state;
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
          <ErgosCarousel images={images} pageName={pageName} />
          { ReactHtmlParser( content ) }
        </Col>
      </Row>
    );
  }
}

Home.propTypes = {
  data: PropTypes.string.isRequired,
  images: PropTypes.shape({
    items: PropTypes.number,
    url: PropTypes.string
  }).isRequired
}
