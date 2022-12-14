import { elements } from './base';

export const getInput = () => elements.searchInput?.value;

export const clearInput = () => (elements.searchInput.value = '');

export const clearResults = () => {
  elements.resultsList.innerHTML = '';
};
