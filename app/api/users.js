import { create } from 'apisauce';

const usersApi = create({
  baseURL: 'https://randomuser.me/api',
});

const getUser = () => usersApi.get('/?exc=login&gender=female');

export default { getUser };
