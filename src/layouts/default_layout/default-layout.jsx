import React from 'react';
import Header from '../../containers/header_container/header-container.js';
import Footer from '../../containers/footer_container/footer-container.js';
import PropTypes from 'prop-types';

class DefaultLayout extends React.Component {
  render() {
    return(
      <div>
        <Header />

        { this.props.children }

        <Footer />
      </div>
    );
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.object,
};

export default DefaultLayout;
