// UserContext.jsx
import React, { createContext, useState } from 'react';

// Create a context
export const UserContext = createContext(); // createContext nte variable name aan return nte ullil kodukkunnath

// Create a provider component
const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('Athulraj');
  const [email, setEmail] = useState('');
  return (
    <UserContext.Provider value={{ userName, setUserName, email, setEmail }}> 
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;


