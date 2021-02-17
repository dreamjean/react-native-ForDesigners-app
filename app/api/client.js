import { create } from 'apisauce';

const authApi = create({
  baseURL: 'https://uinames.com/api',
});

export default authApi;
