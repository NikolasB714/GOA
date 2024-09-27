import React, { useContext } from 'react';
import UserContext from './UserContext';

const AuthStatus = () => {
  const { isLoggedIn, user, login, logout } = useContext(UserContext);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {user.name}!</h1>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please log in.</h1>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
};

export default AuthStatus;
