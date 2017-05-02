import React from 'react';
import { NavLink } from 'react-router-dom';
import {PropTypes} from 'prop-types';

class Settings extends React.Component{
  componentWillMount(){
    const {loadingPage} = this.props;
    loadingPage();
  }
  render() {
    return(
      <div>
        <h2>Settings</h2>
        <NavLink to='/'>Home</NavLink>
      </div>
    );
  }
}

Settings.propTypes = {
  loadingPage: PropTypes.func,
};

export default Settings;
