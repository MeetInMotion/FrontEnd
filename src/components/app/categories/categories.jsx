import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class Categories extends React.Component {
  
  componentWillMount() {
    const { loadingPage, loadCategories } = this.props;
    loadingPage();
    loadCategories();
  }

  render() {
    const { categoriesList } = this.props.categories;

    return (
      <div>
        <h2>
          Categories
        </h2>
        <ul>
          { categoriesList.map(
            (category, i) => (
              <li key={ i }>
                <NavLink to={ `/categories/locations/${category.name}` } >
                  { category.name }
                </NavLink>
              </li>
              )
            )
          }
        </ul>

        <NavLink to="/">Home</NavLink>
      </div>
    );
  }
}

Categories.propTypes = {
  loadingPage: PropTypes.func,
  loadCategories: PropTypes.func,
  categories: PropTypes.shape({
    categoriesList: PropTypes.array,
  }),
};

export default Categories;
