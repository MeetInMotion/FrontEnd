import React from 'react';
import { PropTypes } from 'prop-types';

class Favourites extends React.Component {
  componentWillMount() {
    const { loadingPage } = this.props;
    loadingPage();
  }

  render() {
    return (
      <div>
        <h2>Favourites</h2>
      </div>
    );
  }
}

Favourites.propTypes = {
  loadingPage: PropTypes.func,
};

export default Favourites;
