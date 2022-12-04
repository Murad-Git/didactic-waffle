import Countries from './models/countries';
import { clearLoader, elements, renderError, renderLoader } from './views/base';
import * as countriesView from './views/countryView';
import * as searchView from './views/searchView';

interface IState {
  countries: any;
}

const state: IState = {
  countries: {},
};

const controlSearch = async () => {
  // get input
  const number = searchView.getInput();
  if (!number) {
    countriesView.clearCountry();
    return renderError(elements.resultsList, 'Please provide a number');
  }

  if (+number > 20 || +number < 5) {
    countriesView.clearCountry();
    return renderError(
      elements.resultsList,
      'Please provide a number between 5-10'
    );
  }

  // clean UI
  countriesView.clearCountry();
  renderLoader(elements.resultsList);

  // create new country object
  state.countries = new Countries(+number);

  try {
    // search random countries
    await state.countries.getCountries(number);
    clearLoader();

    // render countries
    countriesView.renderCountries(state.countries.formattedCountry);
  } catch (error) {
    console.error(error);
    countriesView.clearCountry();
    renderError(elements.resultsList, 'Error in rendering countries');
  }
};

const init = () => {
  elements.searchForm?.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
  });
};
init();
