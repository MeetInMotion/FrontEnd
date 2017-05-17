import React from 'react';
import { NavLink } from 'react-router-dom';
import {PropTypes} from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './settings.scss';

class Settings extends React.Component{
  componentWillMount(){
    const {loadingPage} = this.props;
    loadingPage();
  }
  render() {
    return(
      <div>
        <h2>Settings</h2>

        <NavLink styleName="navigation-link" to='/'>Home</NavLink>
        <NavLink styleName="navigation-link" to='/login'>Logout</NavLink>

      </div>
    );
  }
}

Settings.propTypes = {
  loadingPage: PropTypes.func,
};

export default CSSModules(Settings, styles);
