import config from '../../../../config/config';
import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import Events from '../events/event-page.js';
import styles from './single_location.scss';
import CSSModules from 'react-css-modules';

class SingleLocation extends React.Component {

  componentWillMount() {
    const { loadingPage } = this.props;
    loadingPage('single location');
  }

  componentDidMount(){
    const { loadLocation } = this.props;
    loadLocation(this.props.match.params.id);
  }

  render() {
    const { location, user } = this.props;
    const { authenticated } = user;
    const eventsUrl = config.host + "/locations/"+this.props.match.params.id+"/events";

    return(
      <div>
        <center>
          <h2>
            { location.name }
          </h2>

          <img src= {location.img_url} className="pic" height="150" width="250"/>
          <br/>
          <br/>
          
          <i className="fa icon-thumbs-up" aria-hidden="true" styleName="icon"/>
          
          <br/>

          <a href={'http://maps.google.com/maps?q=' + location.coordinates.north + ',' + location.coordinates.east}>Google maps directions</a>

          <br/>
          <br/>
          { authenticated ? 
            <NavLink to={ `/categories/locations/location/${location.id}/create-event` } >
              Create event 
            </NavLink> : "Log in to create event!" }
          
          <Events url={ eventsUrl } { ...this.props } />
          
        </center>
      </div>
    );
  }
}

SingleLocation.propTypes = {
  loadingPage: PropTypes.func,

  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    }),
  }),

  user: PropTypes.shape({
    authenticated: PropTypes.bool,
  }),

  loadLocation: PropTypes.func,

  location: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.bool,
    location: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      img_url: PropTypes.string,
      coordinates: PropTypes.shape({
        east: PropTypes.string,
        north: PropTypes.string,
      }),
    }),
  }),
};

export default CSSModules(SingleLocation, styles);
