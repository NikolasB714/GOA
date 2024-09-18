import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const UserInfo = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserInfo;