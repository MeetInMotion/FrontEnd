import React from 'react';
import Header from '../header/header-container.js';
import Footer from '../footer/footer-container.js';
import PropTypes from 'prop-types';
import styles from './default-layout.scss';
import CSSModules from 'react-css-modules';

class DefaultLayout extends React.Component {
  render() {
    return(
      <div styleName="default-layout">
        
        <Header />
        
        <div styleName="content">
          { this.props.children }
        </div>

        <Footer />
      </div>
    );
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.object,
};

export default CSSModules(DefaultLayout, styles);
