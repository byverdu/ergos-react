import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../components/subComponents/loading';
import ErgosCarousel from '../components/carousel';

export default class Services extends Component {
  constructor( props ) {
    super( props )

    this.state = {
      content: this.props.data,
      images: this.props.images,
      pageName: 'services'
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
          { ReactHtmlParser( content )}
        </Col>
      </Row>
    );
  }
}

Services.propTypes = {
  data: PropTypes.string.isRequired,
  images: PropTypes.shape({
    items: PropTypes.number,
    url: PropTypes.string
  }).isRequired
}
