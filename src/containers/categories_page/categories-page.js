import Categories from '../../pages/categories/categories.jsx';
import { connect } from 'react-redux';
import { loadingPage } from '../../actions/page_actions/page-actions.js';
import { loadCategories } from '../../actions/categories_actions/categories-actions.js';

function mapDispatchToProps(dispatch) {
  return {
    loadingPage: () => dispatch(loadingPage('categories')),
    loadCategories: () => dispatch(loadCategories()),
  };
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
