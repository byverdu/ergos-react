import React, { Component } from 'react';
import Link from './link';

export default class NavBar extends Component {
  getLinks() {
    const linksList = [
      {href: 'http://google.es', text: 'Google'},
      {href: 'http://sport.es', text: 'Sport'}
    ];
    return linksList.map(( item, index ) => (
      <li>
        <Link
          key={index}
          linkHref={item.href}
          linkText={item.text}
        />
    </li>
    ));
  }
  render() {
    return (
      <nav>
        <ul>
          { this.getLinks() }
        </ul>
      </nav>
    );
  }
}
