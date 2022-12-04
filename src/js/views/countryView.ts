// import Base from "./base";
import { ICountry, ICountryInfo } from '../../types/main';
import { elements } from './base';

export const clearCountry = () => {
  elements.resultsList.innerHTML = '';
};

export const renderCountries = (
  countries: ICountry[],
  specific: ICountryInfo[]
): void => {
  const markup = countries
    .map(
      (country, index) => `
 <li>
            <p><strong>ID: </strong>${country.id}</p>
            <p><strong>City: </strong>${country.city}</p>
            <p><strong>Street name: </strong>${country.street_name}</p>
            <p><strong>Street address: </strong>${country.street_address}</p>
            <p><strong>Community: </strong>${country.community}</p>
            <p><strong>State: </strong>${country.state}</p>
            <p><strong>Country: </strong>${country.country}</p>
            <p><strong>Country code: </strong>${country.country_code}</p>
            ${renderSpecific(specific, index)}
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
