import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './footer.scss';
import CSSModules from 'react-css-modules';

class Footer extends React.Component {
  render() {
    return(
      <nav className="row" styleName="menuposition">
        <NavLink className='col-xs-3' styleName="navigation-link" to="/categories">
          <i className="fa fa-list" aria-hidden="true"/>
          <br/>
          CATEGORIES
        </NavLink>
        <NavLink className='col-xs-3' styleName="navigation-link" to="/events">
          <i className="fa fa-handshake-o" aria-hidden="true"/>
          <br/>
          EVENTS
        </NavLink>
        <NavLink className='col-xs-3' styleName="navigation-link" to="/favourites">
          <i className="fa fa-thumbs-up" aria-hidden="true"/>
          <br/>
          FAVOURITES
        </NavLink>
        <NavLink className='col-xs-3' styleName="navigation-link" to="/settings">
          <i className="fa fa-heart-o" aria-hidden="true"/>
          <br/>
          SETTINGS
        </NavLink>
      </nav>
    );
  }
}

export default CSSModules(Footer, styles);
