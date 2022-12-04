// import Base from "./base";
import { elements } from './base';

export const clearCountry = () => {
  elements.resultsList.innerHTML = '';
};

export const renderCountries = (countries: any): void => {
  console.log(countries);
  const markup = countries
    .map(
      country => `
          <li>
            <p><strong>ID: </strong>${country.main.id}</p>
            <p><strong>City: </strong>${country.main.city}</p>
            <p><strong>Street name: </strong>${country.main.street_name}</p>
            <p><strong>Street address: </strong>${
              country.main.street_address
            }</p>
            <p><strong>Community: </strong>${country.main.community}</p>
            <p><strong>State: </strong>${country.main.state}</p>
            <p><strong>Country.main: </strong>${country.main.country.main}</p>
            <p><strong>Country.main code: </strong>${
              country.main.country_code
            }</p>
          <div class="specific">
          ${
            Array.isArray(country.specific)
              ? `            <p><strong>Capital: </strong>${
                  country.specific[0]
                }</p>
            <p><strong>Population: </strong>${country.specific[1]}</p>
            <p><strong>Language: </strong>${Object.values(
              country.specific[2]
            )}</p>`
              : `<p><strong>${country.specific}</strong></p>`
          }
        </div>
          </li>
  `
    )
    .join('');
  elements.resultsList.insertAdjacentHTML('afterbegin', markup);
};

const renderSpecific = (data: any, index: number) => {
  if (Array.isArray(data[index]))
    return `
        <div class="specific">
          <p><strong>Capital: </strong>${data[index][0]}</p>
          <p><strong>Population: </strong>${data[index][1]}</p>
          <p><strong>Language: </strong>${Object.values(data[index][2])}</p>
        </div>
  `;
  else return `<p><strong>${data[index]}</strong></p>`;
};
