import React from 'react';
import styles from './header.scss';
import CSSModules from 'react-css-modules';
import { NavLink } from 'react-router-dom';
import UserLoginData from '../../components/app/login/login';
class Header extends React.Component{
  render () {
    return(
      <nav styleName='header'>
        <NavLink styleName='nav' to="/"> MEET IN MOTION </NavLink>
        <UserLoginData />
      </nav>
    );
  }
}
export default CSSModules(Header, styles);
