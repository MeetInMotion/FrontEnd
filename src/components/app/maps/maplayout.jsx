
/* eslint react/prop-types: 0 */
import React from 'react';
import GoogleMapReact from 'google-map-react';
import {PropTypes} from 'prop-types';
import CSSModules from 'react-css-modules';
//import styles from './mapLayout.scss';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


export class Maplayout extends React.Component {
  constructor(props){
    super(props);

  }

  componentWillMount(){
    const {loadingPage} = this.props;
    loadingPage();
  }

  render() {
    return (
      <div style={styles.container}>
        <GoogleMapReact
          apiKey={"AIzaSyAWQm1uaqrEQfWHk-phCZ4_yXTLg3akW0o"}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          >
          <AnyReactComponent
            lat={59.334591}
            lng={18.063240}
            //text={'Google Map'}
            />
        </GoogleMapReact>
      </div>
    );
  }
}

Maplayout.defaultProps = {
  center: {lat: 59.334591, lng: 18.063240},
  zoom: 11,
};

Maplayout.propTypes = {
  loadingPage: PropTypes.func,
  center: PropTypes.object,
  zoom: PropTypes.number,
//  text: PropTypes.string,
};

const styles = {
  container: {
    width: '700px',
    height: '500px',
  },
};

export default CSSModules(Maplayout, styles);
