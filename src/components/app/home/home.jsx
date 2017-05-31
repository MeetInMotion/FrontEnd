import React from 'react';
import { PropTypes } from 'prop-types';

class Home extends React.Component {
  componentWillMount() {
    const { loadingPage } = this.props;
    loadingPage();
  }

  render() {
    return (
      <div>
        <h2>
          Welcome!
        </h2>
      </div>
    );
  }
}

Home.propTypes = {
  loadingPage: PropTypes.func,
};

export default Home;
