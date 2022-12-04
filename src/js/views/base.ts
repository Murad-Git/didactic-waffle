// @ts-nocheck
import errorImg from 'url:../../img/error.png';
import loaderSvg from 'url:../../img/loader-spinner.svg';

export const elements = {
  searchForm: document.querySelector('.search'),
  searchInput: <HTMLInputElement>document.querySelector('.search__field'),
  results: document.querySelector('.results'),
  resultsList: <HTMLUListElement>document.querySelector('.countries__list'),
  specificList: <HTMLUListElement>document.querySelector('.country__list'),
};

export const renderLoader = (parent: HTMLElement) => {
  const loader = `
          <div class="loader">
            <object
              data="${loaderSvg}"
              type="image/svg+xml"
            ></object>
          </div>
    `;
  parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
  const loader = document.querySelector('.loader');
  if (loader) loader.parentElement?.removeChild(loader);
};
export const renderError = (parent: HTMLElement, message: string) => {
  const errorMsg = `
          <div class="error">
            <p>${message}</p>
            <img src="${errorImg}" alt="Error" class="error_img">
          </div>
  `;
  parent.insertAdjacentHTML('afterbegin', errorMsg);
};
