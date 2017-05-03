import Categories from './categories.jsx';
import { connect } from 'react-redux';
import { loadingPage } from '../page-actions.js';
import { loadCategories } from './category-actions.js';

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
