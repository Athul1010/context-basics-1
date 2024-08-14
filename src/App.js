// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProvider from './Components/UserContext'; 
import UserProfile from './Components/UserProfile';
import UserSettings from './Components/UserSettings';


const App = () => {
  return (
    // UserContext.jsx il kodutha function name aan <UserProvider>
    <UserProvider> 
      <div>
        <h1>Welcome to the User App</h1>
        <UserProfile />
        <UserSettings />
      </div>
    </UserProvider>
  );
};

export default App;


