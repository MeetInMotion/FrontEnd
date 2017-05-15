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
        <p>De två första kategorierna mappas till &quot; rätt &quot; locations genom fejkade api-anrop med hjälp av Id-numren</p>
        <ul>
          { categoriesList.map(
            (category, i) => (
              <li key={ i }>
                <NavLink to={ `/categories/locations/${category.PluralName}` } >
                  { category.PluralName }
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
