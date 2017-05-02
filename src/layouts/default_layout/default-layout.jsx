import React from 'react';
import Header from '../../containers/header_container/header-container.js';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './default-layout.scss';
import CSSModules from 'react-css-modules';

class DefaultLayout extends React.Component {
  render() {
    return(
      <div>
        <Header />

        { this.props.children }

        <div styleName="menuposition">
          <ul>
            <NavLink styleName="navigation-link" to="/categories">Categories</NavLink>
            <NavLink styleName="navigation-link" to="/settings">Settings</NavLink>
            <NavLink styleName="navigation-link" to="/events">Events</NavLink>
            <NavLink styleName="navigation-link" to="/favourites">Favourits</NavLink>
          </ul>
        </div>
      </div>
    );
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.object,
};

export default CSSModules(DefaultLayout, styles);
