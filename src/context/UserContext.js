import React, { useState, createContext } from 'react';
import firestore from '@react-native-firebase/firestore';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // Puedes mantener esta línea o eliminarla si no es necesaria
  const [currentUser, setCurrentUser] = useState(null);

  const registerUser = async (newUser) => {
    // Verificar si el email ya está registrado
    const emailExists = users.some(user => user.email === newUser.email);
    if (emailExists) {
      throw new Error('El email ya está registrado.');
    }

    // Almacenar el nuevo usuario en Firestore
    await firestore().collection('users').add(newUser);
    
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
  };

  const loginUser = async (email, password) => {
    // Buscar al usuario en Firestore
    const snapshot = await firestore().collection('users').where('email', '==', email).get();
    
    if (snapshot.empty) {
      throw new Error('Email o contraseña incorrectos.');
    }

    let userFound = null;

    snapshot.forEach(doc => {
      const userData = doc.data();
      if (userData.password === password) { // Asegúrate de almacenar las contraseñas de forma segura, por ejemplo, utilizando hashing
        userFound = { id: doc.id, ...userData }; // Agregar el ID del documento a los datos del usuario
      }
    });

    if (userFound) {
      setCurrentUser(userFound);
      return userFound;
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
    <UserContext.Provider value={{ users, currentUser, registerUser, loginUser, logoutUser, updateUserPhoto }}>
      {children}
    </UserContext.Provider>
  );
};
