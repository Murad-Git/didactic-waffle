import axios from 'axios';
import { ICountry, ICountryInfo } from '../../types/main';
import { countries_url, country_url } from '../config';

export default class Countries {
  number: number;
  randomCountriesList: ICountry;
  countriesList: string[];
  countriesInfo: ICountryInfo | string;
  constructor(number: number) {
    this.number = number;
  }

  async getCountries() {
    try {
      const respond = await axios.get(`${countries_url}?size=${this.number}`);
      this.randomCountriesList = respond.data;
      this.countriesList = respond.data.map(({ country }: string) => country);
      await this.getCountryInfo();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getCountryInfo() {
    try {
      // const respond = await axios.get(`${country_url}Poland`);
      const respond = await Promise.allSettled(
        this.countriesList.map(country => axios.get(`${country_url}${country}`))
      );

      this.countriesInfo = respond.map(item => {
        if (item.status === 'fulfilled') {
          return [
            item.value.data[0].capital[0],
            item.value.data[0].population,
            item.value.data[0].languages,
          ];
        } else return 'No information found!';
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
