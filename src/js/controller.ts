import Countries from './models/Countries';
import { clearLoader, elements } from './views/base';
import * as countriesView from './views/countryView';
import * as searchView from './views/searchView';

interface IState {
  countries: object;
  getCountries: (number: number) => void;
}

const state: IState = {
  countries: {},
};

const controlSearch = async () => {
  // get input
  const number = searchView.getInput();
  if (number) {
    state.countries = new Countries(+number);
    // renderLoader(elements.results as HTMLElement)
    try {
      // search random countries
      await state.countries.getCountries(number);
      clearLoader();
      console.log(state.countries.randomCountriesList);
      countriesView.renderCountries(
        state.countries.randomCountriesList,
        state.countries.countriesInfo
      );
      // console.log(state.countries.countriesInfo);
    } catch (error) {
      console.error(error);
    }
  }
};

const init = () => {
  elements.searchForm?.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
  });
};
init();
