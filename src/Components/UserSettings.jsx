// UserSettings.js
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserSettings = () => {
  const { userName, setUserName } = useContext(UserContext);
  const { email, setEmail } = useContext(UserContext);
  console.log('my name',userName);
  

  return (
    <div>
      <h2>User Settings</h2>
      <p>Change User Name:</p>
      <div>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

    </div>
  );
};

export default UserSettings;
