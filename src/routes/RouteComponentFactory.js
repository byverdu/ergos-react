import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../components/subComponents/loading';
import ErgosCarousel from '../components/carousel';

export function RouteComponentFactory ( pageName ) {
  return class extends Component {
    constructor( props ) {
      super( props )

      this.state = {
        content: this.props.data.content,
        images: this.props.data.images,
        legends: this.props.data.legends,
        pageName
      };
    }

    componentWillReceiveProps( nextProps ) {
      this.setState({
        content: nextProps.data.content,
        legends: nextProps.data.legends
      });
    }

    render() {
      const { content, images, pageName, legends } = this.state;
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
            <ErgosCarousel images={images} pageName={pageName} legends={legends} />
            { ReactHtmlParser( content )}
          </Col>
        </Row>
      );
    }
  }
}
