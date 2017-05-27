import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './footer.scss';
import CSSModules from 'react-css-modules';

class Footer extends React.Component {
  render() {
    return(
      <nav styleName="menuposition">
        <NavLink styleName="navigation-link" to="/categories"><i className="fa fa-list" aria-hidden="true"/> CATEGORIES</NavLink>
        <NavLink styleName="navigation-link" to="/settings"><i className="fa fa-heart-o" aria-hidden="true"/> SETTINGS</NavLink>
        <NavLink styleName="navigation-link" to="/events"><i className="fa fa-handshake-o" aria-hidden="true"/> EVENTS</NavLink>
        <NavLink styleName="navigation-link" to="/favourites"><i className="fa fa-thumbs-up" aria-hidden="true"/> FAVOURITES</NavLink>
      </nav>
    );
  }
}

export default CSSModules(Footer, styles);
