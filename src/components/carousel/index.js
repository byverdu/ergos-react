import React, { Component, PropTypes } from 'react';
import './styles.css';
import { Carousel } from 'react-responsive-carousel';
import { getImagesDataFor } from '../../components/utils';

export default class ErgosCarousel extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      images: this.props.images,
      pageName: this.props.pageName
    }
  }

  render() {
    const { items, url } = this.state.images;
    const { pageName } = this.state;
    return(
      <Carousel>
        {getImagesDataFor( pageName, items, url )}
      </Carousel>
    );
  }
}

ErgosCarousel.propTypes = {
  images: PropTypes.object.isRequired,
  pageName: PropTypes.string.isRequired
}
