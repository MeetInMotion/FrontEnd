import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';


class SingleLocation extends React.Component {

  componentWillMount() {
    const { loadingPage } = this.props;
    loadingPage('single location');

  }

  componentDidMount(){
    const {loadLocation} = this.props;
    loadLocation(this.props.match.params.id);
  }

  render() {
    const {location} = this.props;
    return(
      <div >
        <h2>
          { location.name }
        </h2>

        <h4>Geographical position(4 dev):</h4>
        <p>X: { location.coordinates.east }</p>
        <p>Y: { location.coordinates.north }</p>

        <NavLink to={ `/categories/locations/location/${location.id}/create-event` } >
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

export default SingleLocation;
