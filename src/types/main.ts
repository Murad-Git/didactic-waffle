export interface ICountry {
  building_number: string;
  city: string;
  city_prefix: string;
  city_suffix: string;
  community: string;
  country: string;
  country_code: string;
  full_address: string;
  id: number;
  latitude: number;
  longitude: number;
  mail_box: string;
  postcode: string;
  secondary_address: string;
  state: string;
  state_abbr: string;
  street_address: string;
  street_name: string;
  street_suffix: string;
  time_zone: string;
  uid: string;
  zip: string;
  zip_code: string;
}

export interface ICountryInfo {
  capital: string[];
  population: number;
  languages: object;
}
declare interface PromiseConstructor {
  allSettled(
    promises: Array<Promise<any>>
  ): Promise<
    Array<{ status: 'fulfilled' | 'rejected'; value?: any; reason?: any }>
  >;
}
