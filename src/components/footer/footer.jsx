import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './footer.scss';
import CSSModules from 'react-css-modules';

class Footer extends React.Component {
  render() {
    return(
      <nav styleName="menuposition">
        <NavLink styleName="navigation-link" to="/categories">CATEGORIES</NavLink>
        <NavLink styleName="navigation-link" to="/settings">SETTINGS</NavLink>
        <NavLink styleName="navigation-link" to="/events">EVENTS</NavLink>
        <NavLink styleName="navigation-link" to="/favourites">FAVOURITES</NavLink>
      </nav>
    );
  }
}

export default CSSModules(Footer, styles);
