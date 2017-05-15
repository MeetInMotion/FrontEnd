import React from 'react';
import styles from './header.scss';
import CSSModules from 'react-css-modules';
import UserLoginData from '../../components/app/login/login';
import { NavLink } from 'react-router-dom';
class Header extends React.Component{
  render () {
    
    return(
      <header>
        <h1 styleName='title' >{ headerTitle }</h1>
        <UserLoginData />
        <br />
      </header>
    );
  }
}

export default CSSModules(Header, styles);