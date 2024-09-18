import React, { createContext, useState } from 'react';

export const UserContext = createContext({ name: '', email: '' });

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'John', email: 'john@example.com' });

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};