import React, { useState, createContext } from 'react';
export const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: '',
    nombre: '',
    apellido: '',
    password: '', 
    birthdate: '',
    profilePhoto: null,
  });

  // Función para actualizar la imagen de perfil
  const updateUserPhoto = (photoUri) => {
    setUser((prevUser) => ({
      ...prevUser,
      profilePhoto: photoUri,
    }));
  };

  return (
    <UserContext.Provider value={{ user, setUser, updateUserPhoto }}>
      {children}
    </UserContext.Provider>
  );
};
