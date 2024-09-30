import React, { useState, createContext } from 'react';

// Crear el contexto
export const UserContext = createContext();

// Proveedor del contexto que envuelve la app o parte de la app que necesita acceso a la info del usuario
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: '',
    nombre: '',
    apellido: '',
    birthdate: '',
    profilePhoto: null, // Agregamos el campo para la imagen de perfil
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
