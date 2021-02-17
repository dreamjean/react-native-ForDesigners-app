import { create } from 'apisauce';

const usersApi = create({
  baseURL: 'https://randomuser.me/api',
});

const getUser = () => usersApi.get('/?exc=login');

export default { getUser };
