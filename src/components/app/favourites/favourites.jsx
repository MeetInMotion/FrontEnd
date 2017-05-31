import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

class Favourites extends React.Component {
  componentWillMount() {
    const { loadingPage } = this.props;
    loadingPage();
  }

  render() {
    return (
      <div>
        <h2>Favourites</h2>
        <Link to="/weather" >Weather</Link>
      </div>
    );
  }
}

Favourites.propTypes = {
  loadingPage: PropTypes.func,
};

export default Favourites;
