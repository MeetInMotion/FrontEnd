import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

class Favourites extends React.Component {
  componentWillMount() {
    const { loadingPage } = this.props;
    loadingPage();
  }

  render() {
    return (
      <div>
        <h1>Favourits</h1>
        <NavLink to="/">Home</NavLink>
      </div>
    );
  }
}

Favourites.propTypes = {
  loadingPage: PropTypes.func,
};

export default Favourites;
