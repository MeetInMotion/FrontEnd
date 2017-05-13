import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.scss';
import CSSModules from 'react-css-modules';
import UserLoginData from '../../components/app/login/login';
class Header extends React.Component{
  render () {
    const { headerTitle } = this.props.header;

    return(
      <header>
        <h1 styleName='title' >{ headerTitle }</h1>
        <UserLoginData />
        <br />
      </header>
    );
  }
}

Header.propTypes = {
  header: PropTypes.shape({
    headerTitle: PropTypes.string,
  }),
};



export default CSSModules(Header, styles);
