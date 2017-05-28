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

<<<<<<< HEAD
  componentDidMount(){
    const {loadLocation} = this.props;
    loadLocation(this.props.match.params.id);
  }

  render() {
    const {location} = this.props;
    return(
      <div>
=======
  render() {
    
    const myLocation = this.props.locations.locationsList.find(
      (l) => l.name === this.props.match.params.name
    );
    
    return(

      <div>
        <NavLink styleName="create_event_link" to={ `/categories/locations/location/${myLocation.name}/create-event` } >
          Create event
        </NavLink>      
>>>>>>> 6ab56d66a3b3dfde1ae9deb710bb2d824a9a144a
        <h2>
          { location.name }
        </h2>

<<<<<<< HEAD
        <img src= {location.img_url} className="pic" height="150" width="250"/>
        <br/>
        <a href={'http://maps.google.com/maps?q=' + location.coordinates.north + ',' + location.coordinates.east}>Google maps directions</a>
        <br/>
        <br/>
        <NavLink to={ `/categories/locations/location/${location.name}/create-event` } />

        <NavLink to={ `/categories/locations/location/${location.id}/create-event` } >
          Create event
        </NavLink>
=======
        <img src={myLocation.img_url}/>

        <h1>Hello</h1>
        <Events locationId={ myLocation.id } {...this.props} />
>>>>>>> 6ab56d66a3b3dfde1ae9deb710bb2d824a9a144a
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
