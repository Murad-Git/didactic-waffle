// import Base from './base';

// class SearchView extends Base {
//   _parentElement = document.querySelector('.search');
//   _errorMessage = 'Please enter a number between 5-10';

//   getInput = () => elements.searchInput?.value;
//   clearInput = () => (elements.searchInput.value = '');
// }

// export default new SearchView();

import { elements } from './base';

export const getInput = () => elements.searchInput?.value;

export const clearInput = () => (elements.searchInput.value = '');

export const clearResults = () => {
  elements.resultsList.innerHTML = '';
};
