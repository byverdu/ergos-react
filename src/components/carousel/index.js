import React, { Component } from 'react';
import './styles.css';
import { Carousel } from 'react-responsive-carousel';

export default class ErgosCarousel extends Component {
  render() {
    return(
      <Carousel>
        <div>
                    <img src="http://placehold.it/350x150" alt="xoxo" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="http://placehold.it/350x150" alt="xoxo" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="http://placehold.it/350x150" alt="xoxo" />
                    <p className="legend">Legend 3</p>
                </div>
      </Carousel>
    );
  }
}
