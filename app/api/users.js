import { create } from 'apisauce';

const usersApi = create({
  baseURL: 'https://uinames.com/api',
});

const getUser = () => usersApi.get('/?ext');

export default { getUser };
