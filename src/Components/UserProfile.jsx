// UserProfile.js
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserProfile = () => {
  const { userName } = useContext(UserContext);
  const {email} = useContext(UserContext);
  return (
    <div>
      <h2>User Profile</h2>
      <p>User Name: {userName}</p>
      <p>{email}</p>
    </div>
  );
};

export default UserProfile;
