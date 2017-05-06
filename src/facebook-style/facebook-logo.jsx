import React, { Component } from 'react';
import merge from 'lodash/merge';
import { PropTypes } from 'prop-types';
//import animation from './facebook-style/animation'; // eslint-disable-line no-unused-vars

export default class FacebookLogo extends Component {

  constructor(props) {
    super(props);
    const style = {
      boxSizing: 'border-box',
      width: 30,
      height: '90%',
      borderRadius: '50%',
      border: '5px solid #f3f3f3',
      borderTop: '5px solid #3498db',
      animation: 'spin 2s linear infinite',
      position: 'absolute',
      left: 5,
    };
    this.styles = merge({}, style, props.style);
  }

  render() {
    return <div style={this.styles} />;
  }
}

FacebookLogo.propTypes = {
  style: PropTypes.string,
};
