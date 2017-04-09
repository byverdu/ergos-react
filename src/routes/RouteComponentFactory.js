import React, { Component } from 'react';
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

    setCarouselPosition( pageName ) {
      const mainPages = [ 'home', 'services' ];
      return mainPages.indexOf( pageName ) >= 0;
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
        <div>
          {
            this.setCarouselPosition( pageName ) ?
            <ErgosCarousel images={images} pageName={pageName} legends={legends} /> :
            null
          }
          <div className="ergos-content">
            { ReactHtmlParser( content )}
          </div>
          {
            !this.setCarouselPosition( pageName ) ?
            <ErgosCarousel images={images} pageName={pageName} legends={legends} /> :
            null
          }
        </div>
      );
    }
  }
}
