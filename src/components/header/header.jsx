import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.scss';
import CSSModules from 'react-css-modules';
import { NavLink } from 'react-router-dom';

class Header extends React.Component{

  // componentWillMount(){
  //   this.props.loadFbSdk();
  //   this.onClick = this.onClick.bind(this); 
  // }

  // onClick() {
  //   const {authenticateUser, signUserOut} = this.props;

  //   window.FB.getLoginStatus(function(statusResponse) {
  //     if (statusResponse.status == "unknown" || statusResponse.status == "not_authorized") {
  //       window.FB.login(function(loginResponse) {
  //         if (loginResponse.status == "connected") {
  //           authenticateUser(loginResponse.authResponse.accessToken);
  //         }
  //       }, {scope: "public_profile,email"});
  //     }else {
  //       window.FB.logout(function() {
  //         signUserOut();
  //       });
  //     }
  //   }); 
  // }

  // <LinkContainer className="fa fa-facebook-official fa-1x" styleName="icon" aria-hidden="true" to="/login">
  //   <NavItem eventKey={1}> Login </NavItem>            
  // </LinkContainer>


  render () {
    // const authenticated = this.props.user.authenticated;
    return(
      <nav styleName='title'>
        <NavLink styleName='nav' to="/">MEET IN MOTION</NavLink>
      </nav>
    );
  }
}

Header.propTypes = {
  loadFbSdk: PropTypes.func,
  authenticateUser: PropTypes.func,
  signUserOut: PropTypes.func,
  user: PropTypes.shape({
    authenticated: PropTypes.bool,
  }),
};

export default CSSModules(Header, styles);
