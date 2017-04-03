import React, { Component, PropTypes } from 'react';
import './styles.css';
import { Carousel } from 'react-responsive-carousel';
import { getImagesDataFor } from '../../components/utils';

export default class ErgosCarousel extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      images: this.props.images,
      pageName: this.props.pageName,
      legends: this.props.legends
    }
  }

  componentWillReceiveProps( nextProps ) {
    this.setState({
      legends: nextProps.legends
    })
  }

  render() {
    const { items, url } = this.state.images;
    const { pageName, legends } = this.state;
    return(
      <Carousel>
        {getImagesDataFor( pageName, items, url, legends )}
      </Carousel>
    );
  }
}

ErgosCarousel.propTypes = {
  images: PropTypes.object.isRequired,
  pageName: PropTypes.string.isRequired,
  legends: PropTypes.array.isRequired
}
