import axios from 'axios';

const headers = {
  "accept": "application/json",
  "Content-Type": "application/json"
}

const instance = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/all',
  headers
});

export const ENDPOINTS = {
  byName: (name)=> `/name/${name}`,
  byCountryCode: (code)=> `/alpha/${code}`,
};

export default instance;
