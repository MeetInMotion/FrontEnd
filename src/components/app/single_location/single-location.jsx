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

  render() {
    const myLocation = this.props.locations.locationsList.find(
      (l) => l.name === this.props.match.params.name
    );
    
    return(

      <div>
        <NavLink styleName="create_event_link" to={ `/categories/locations/location/${myLocation.name}/create-event` } >
          Create event
        </NavLink>      
        <h2>
          { myLocation.name }
        </h2>

        <img src={myLocation.img_url}/>

        <h1>Hello</h1>
        <Events locationId={ myLocation.id } {...this.props} />
      </div>
    );
  }
}

SingleLocation.propTypes = {
  loadingPage: PropTypes.func,

  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),

  locations: PropTypes.shape({
    locationsList: PropTypes.array,
  }),
};

export default CSSModules(SingleLocation, styles);
