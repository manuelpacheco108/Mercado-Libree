import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const registerUser = (newUser) => {
    const emailExists = users.some(user => user.email === newUser.email);
    if (emailExists) {
      throw new Error('El email ya está registrado.');
    }

    setUsers([...users, newUser]);
    setCurrentUser(newUser);
  };

  const loginUser = (email, password) => {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      setCurrentUser(user);
      return user;
    } else {
      throw new Error('Email o contraseña incorrectos.');
    }
  };

  const logoutUser = () => {
    setCurrentUser(null);
  };

  const updateUserPhoto = (photoUri) => {
    if (currentUser) {
      const updatedUser = { ...currentUser, profilePhoto: photoUri };
      setCurrentUser(updatedUser);
      setUsers(users.map(user => user.email === updatedUser.email ? updatedUser : user));
    }
  };

  return (
    <UserContext.Provider value={{ users, currentUser, registerUser, loginUser, logoutUser, updateUserPhoto, UserProvider }}>
      {children}
    </UserContext.Provider>
  );
};
