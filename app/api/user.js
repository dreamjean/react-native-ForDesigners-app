import { create } from 'apisauce';

import keys from './keys';

export const userClient = create({
  baseURL: 'https://uifaces.co/api?limit=1&gender[]=female',
  headers: {
    'X-API-KEY': keys.API_KEY,
    Accept: 'application/json',
    'Cache-Control': 'no-cache',
  },
});
