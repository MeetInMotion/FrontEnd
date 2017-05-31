import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import styles from './footer.scss';
import CSSModules from 'react-css-modules';

class Footer extends React.Component {

  componentWillMount(){
    this.props.loadFbSdk();
    this.onClick = this.onClick.bind(this); 
  }

  onClick() {
    const { authenticateUser, signUserOut } = this.props;

    window.FB.getLoginStatus(function(statusResponse) {
      if (statusResponse.status == "unknown" || statusResponse.status == "not_authorized") {
        window.FB.login(function(loginResponse) {
          if (loginResponse.status == "connected") {
            authenticateUser(loginResponse.authResponse.accessToken);
          }
        }, {scope: "public_profile,email"});
      } else {
        window.FB.logout(function() {
          signUserOut();
        });
      }
    }); 
  }

  render() {
    const authenticated = this.props.user.authenticated;
    return(
      <nav styleName="menuposition">
        <div className="clearfix col-xs-3" styleName="navigation-link">
          <div className="dropup">
            <button type="button" data-toggle="dropdown">
              <i className="fa fa-bars fa-2x" aria-hidden="true"/>
              <br/>OPTIONS
            </button> 
            <ul className="dropdown-menu">
              <li onClick={ this.onClick }>{ authenticated ? 'Log out' : 'Log in'}</li>
              <br/>
              <NavLink styleName="drop-up-link" to="/settings">Settings</NavLink>
            </ul>
          </div>
        </div>

        <NavLink className="col-xs-3" styleName="navigation-link" to="/categories">
          <i className="fa fa-eye fa-2x" aria-hidden="true"/>
          <br/>
          EXPLORE
        </NavLink>
        <NavLink className="col-xs-3" styleName="navigation-link" to="/events">
          <i className="fa fa-calendar fa-2x" aria-hidden="true"/>
          <br/>
          EVENTS
        </NavLink>
        <NavLink className="col-xs-3" styleName="navigation-link" to="/favourites">
          <i className="fa fa-heart-o fa-2x" aria-hidden="true"/>
          <br/>
          FAVOURITES
        </NavLink>

        
      </nav>
    );
  }
}



        // <nav className="row container-fluid">
        //   <div className="col-md-4">
        //     <div className="dropup">
        //       <button type="button" data-toggle="dropdown">
        //         <i className="fa fa-bars" />
        //         OPTIONS
        //       </button> 
        //       <ul className="dropdown-menu">
        //         <li onClick={this.onClick}>{ authenticated ? 'Log out' : 'Log in'}</li>
        //       </ul>
        //     </div>
        //   </div>
        // </nav>



Footer.propTypes = {
  loadFbSdk: PropTypes.func,
  authenticateUser: PropTypes.func,
  signUserOut: PropTypes.func,
  user: PropTypes.shape({
    authenticated: PropTypes.bool,
  }),
};

export default CSSModules(Footer, styles);
