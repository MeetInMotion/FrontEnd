import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './footer.scss';
import CSSModules from 'react-css-modules';

class Footer extends React.Component {
  render() {
    return(
      <div styleName="menuposition">
        <ul>
          <NavLink styleName="navigation-link" to="/categories">Categories</NavLink>
          <NavLink styleName="navigation-link" to="/settings">Settings</NavLink>
          <NavLink styleName="navigation-link" to="/events">Events</NavLink>
          <NavLink styleName="navigation-link" to="/favourites">Favourits</NavLink>
        </ul>
      </div>
    );
  }
}

export default CSSModules(Footer, styles);
