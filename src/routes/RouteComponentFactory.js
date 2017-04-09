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
        <Col className="col-lg-8 offset-lg-2 ergos-wrapper-content">
          <ErgosCarousel images={images} pageName={pageName} legends={legends} />
          <div className="ergos-content">
            { ReactHtmlParser( content )}
          </div>
        </Col>
      );
    }
  }
}
