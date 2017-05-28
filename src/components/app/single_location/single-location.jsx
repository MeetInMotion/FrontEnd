import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

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
      <div >
        <h2>
          { myLocation.name }
        </h2>

        <img src= {myLocation.img_url} className="pic" height="150" width="250"/>
        <br/>
        <a href={'http://maps.google.com/maps?q=' + myLocation.coordinates.north + ',' + myLocation.coordinates.east}>Google maps directions</a>
        <br/>
        <br/>
        <NavLink to={ `/categories/locations/location/${myLocation.name}/create-event` } >
          Create event
        </NavLink>

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

export default SingleLocation;
