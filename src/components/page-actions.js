export const LOADING_PAGE = 'LOADING_PAGE';
export function loadingPage(pageName) {
  return {
    type: LOADING_PAGE,
    pageName: pageName,
  };
}
