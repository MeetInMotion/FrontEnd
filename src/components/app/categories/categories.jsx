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
      <div className="container-fluid">
        <h2>
          Categories
        </h2>
        <div className="alert alert-success">
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
        </div>
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
