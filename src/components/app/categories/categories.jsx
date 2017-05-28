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
        <ul className='list-group'>
          { categoriesList.map(
              (category, i) => (
                <li className='list-group-item' key={ i }>
                  <NavLink to={ `/categories/locations/${category.name}` } >
                    { category.name }
                  </NavLink>
                </li>
              )
          )}
        </ul>
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
