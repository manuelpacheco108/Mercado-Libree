import React, { useState, createContext } from 'react';

export const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // Arreglo de usuarios registrados
  const [currentUser, setCurrentUser] = useState(null); // Usuario actualmente logueado

  // Función para registrar un nuevo usuario
  const registerUser = (newUser) => {
    const emailExists = users.some(user => user.email === newUser.email);
    if (emailExists) {
      throw new Error('El email ya está registrado.');
    }

    setUsers([...users, newUser]);
    setCurrentUser(newUser); // Establecer al nuevo usuario como el actual
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
