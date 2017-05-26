export const LOADING_CATEGORIES = 'LOADING_CATEGORIES';
function loadingCategories() {
  return {
    type: LOADING_CATEGORIES,
    loading: true,
  };
}

export const LOADING_CATEGORIES_SUCCEEDED = 'LOADING_CATEGORIES_SUCCEEDED';
function loadingCategoriesSucceeded(categoriesList) {
  return {
    type: LOADING_CATEGORIES_SUCCEEDED,
    categoriesList: categoriesList,
    loading: true,
    isError: false,
  };
}

export const LOADING_CATEGORIES_FAILED = 'LOADING_CATEGORIES_FAILED';
function loadingCategoriesFailed(error) {
  return {
    type: LOADING_CATEGORIES_FAILED,
    isError: false,
    error: error,
  };
}

export function loadCategories() {
  return function(dispatch) {

    dispatch(loadingCategories());

    fetch("http://api.localhost:8081/categories")
      .then(function(response) {
        return response.json();
      }) 
      .then(function(json) {
        dispatch(loadingCategoriesSucceeded(json)); 
      });

    let isError = false;
    if (isError) {
      dispatch(loadingCategoriesFailed('error message'));
    }
  };
}
