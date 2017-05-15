import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

class Locations extends React.Component {

  componentWillMount() {
    const { actions, categories } = this.props;
    const category = categories.categoriesList.find(
      (c) => c.PluralName === this.props.match.params.pluralName
    );
    
    actions.loadingPage();
    actions.loadLocations(category.Id);
  }

  render() {
    const { locationsList } = this.props.locations;

    return (
      <div>
        <h2>Locations</h2>
        
        <ul>
          { locationsList.map(
            (location, i) => (
              <li key={ i }>
                <NavLink to={ `/categories/locations/location/${location.Name}` } >
                  { location.Name }
                </NavLink>
              </li>
              )
            )
          }
        </ul>

        <NavLink to="/">
          Home
        </NavLink>
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
      pluralName: PropTypes.string,
    }),
  }),
};

export default Locations;