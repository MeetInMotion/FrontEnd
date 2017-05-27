import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

class Locations extends React.Component {

  componentWillMount() {
    const { actions, categories } = this.props;
    const category = categories.categoriesList.find(
      (c) => c.name === this.props.match.params.name
    );

    actions.loadingPage();
    actions.loadLocations(category.id);
  }

  render() {
    const { locationsList } = this.props.locations;
    return (
      <div className="container-fluid">
        <h2>Locations</h2>
        <div className="alert alert-success">
          <ul>
            { locationsList.map(
              (location, i) => (
                <li key={ i }>
                  <NavLink to={ `/categories/locations/location/${location.name}` } >
                    { location.name }
                  </NavLink>
                </li>
                )
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

Locations.propTypes = {
  categories: PropTypes.shape({
    categoriesList: PropTypes.array,
  }),

  actions: PropTypes.shape({
    loadingPage: PropTypes.func,
    loadLocations: PropTypes.func,
  }),

  locations: PropTypes.shape({
    locationsList: PropTypes.array,
  }),

  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};

export default Locations;
