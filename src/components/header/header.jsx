import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.scss';
import CSSModules from 'react-css-modules';
import { NavLink } from 'react-router-dom';

class Header extends React.Component{

  componentWillMount(){
    this.props.loadFbSdk();
    this.onClick = this.onClick.bind(this); 
  }
  onClick() {
    const {authenticateUser, signUserOut} = this.props;
    window.FB.getLoginStatus(function(statusResponse){
      if(statusResponse.status == "unknown" || statusResponse.status == "not_authorized"){
        window.FB.login(function(loginResponse){
          console.log(loginResponse);
          if(loginResponse.status == "connected"){
            authenticateUser(loginResponse.authResponse.accessToken);
          }
        }, {scope: "public_profile,email"});
      }else {
        window.FB.logout(function(){
          signUserOut();
        });
      }
    }); 
  }
  render () {
    const authenticated = this.props.user.authenticated;
    return(
      <nav className="row container-fluid" styleName='title'>
        <NavLink className="col-md-8" styleName='nav' to="/">  MEET IN MOTION </NavLink>
        <div className="col-md-4">
          <div className="dropdown">
            <button type="button" data-toggle="dropdown">
              <i className="fa fa-bars" />
            </button>
            <ul className="dropdown-menu">
              <li onClick={this.onClick}>{ authenticated ? 'Log out' : 'Log in'}</li>
            </ul>
          </div>
        </div>
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
