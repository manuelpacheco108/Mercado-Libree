import React, { createContext, useState, useContext } from 'react';
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInput, setUserInput] = useState('');

  return (
    <UserContext.Provider value={{ userInput, setUserInput }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);