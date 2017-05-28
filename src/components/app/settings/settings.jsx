import React from 'react';
import {PropTypes} from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './settings.scss';

class Settings extends React.Component{
  componentWillMount(){
    const {loadingPage} = this.props;
    loadingPage();
  }

  render() {
    return(
      <div>
        <h2>Settings</h2>
        <div className="alert alert-success">
          <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
            My events: temporary place holder
        </div>
        <div className="alert alert-danger">
          <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
            Current events: temporary place holder
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  loadingPage: PropTypes.func,
};

export default CSSModules(Settings, styles);
