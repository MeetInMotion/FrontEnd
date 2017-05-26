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
      <div>
        <h2>
          { myLocation.name }
        </h2>

        <h4>Geographical position(4 dev):</h4>
        <p>X: { myLocation.coordinates.east }</p>
        <p>Y: { myLocation.coordinates.north }</p>

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