import React, { Component } from 'react';
import './styles.css';
import { Carousel } from 'react-responsive-carousel';
import { getImagesDataFor } from '../../components/utils';

export default class ErgosCarousel extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      images: this.props.images.home
    }
  }

  render() {
    const { items, url } = this.state.images;
    return(
      <Carousel>
        {getImagesDataFor( 'home', items, url )}
      </Carousel>
    );
  }
}
