export const elements = {
  searchForm: document.querySelector('.search'),
  searchInput: <HTMLInputElement>document.querySelector('.search__field'),
  results: document.querySelector('.results'),
  resultsList: <HTMLUListElement>document.querySelector('.countries__list'),
  specificList: <HTMLUListElement>document.querySelector('.country__list'),
};
// export default class Base {
//   _data: ICountry[] | ICountryInfo[];
//   // _parentElement: HTMLElement;
//   _errorMessage: string;
//   render(data, render = true) {
//     if (!data || (Array.isArray(data) && data.length === 0))
//       return this.renderError();
//     this._data = data;
//     const markup = this._generateMarkup();
//     if (!render) return markup;
//     this._clear();
//     this._parentElement.insertAdjacentHTML('afterbegin', markup);
//   }

//   renderLoader = (parent: HTMLElement = this._parentElement) => {
//     const markup = `
//             <div class="loader">
//             <svg>
//                 <use href="img/Spinner-1s-200px.svg"></use>
//             </svg>
//         </div>
//     `;
//     this._clear();
//     parent.insertAdjacentHTML('afterbegin', markup);
//   };

//   clearLoader = () => {
//     const loader = document.querySelector('.loader');
//     if (loader) loader.parentElement?.removeChild(loader);
//   };
//   renderError = (
//     parent: HTMLElement = this._parentElement,
//     message: string = this._errorMessage
//   ) => {
//     const markup = `
//                 <div class="error">
//           <div>
//             <svg>
//               <use href="img/Spinner-1s-200px.svg"></use>
//             </svg>
//           </div>
//           <p>${message}</p>
//         </div>
//       `;
//     this._clear();
//     parent.insertAdjacentHTML('afterbegin', markup);
//   };
//   _clear() {
//     this._parentElement.innerHTML = '';
//   }
// }

export const renderLoader = (parent: HTMLElement) => {
  const loader = `
<div class="loader">
            <svg>
                 <use href="img/Spinner-1s-200px.svg"></use>
            </svg>         </div>
    `;
  parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
  const loader = document.querySelector('.loader');
  if (loader) loader.parentElement?.removeChild(loader);
};
