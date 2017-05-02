import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
//import {connect} from 'react-redux';

class Home extends React.Component {
  componentWillMount() {
    const { loadingPage } = this.props;
    loadingPage();
  }

  render() {
    return (
      <div>
        <ul>
          <li><NavLink to="/categories">Categories</NavLink></li>
          <li><NavLink to="/settings">Settings</NavLink></li>
          <li><NavLink to="/events">Events</NavLink></li>
          <li><NavLink to="/favourites">Favourits</NavLink></li>
        </ul>
      </div>
    );
  }
}

Home.propTypes = {
  loadingPage: PropTypes.func,
};

export default Home;
