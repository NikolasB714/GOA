import { createContext } from 'react';

const UserContext = createContext({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {}
});

export default UserContext;
