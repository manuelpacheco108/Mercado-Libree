import React from "react";
import MainStack from "./src/navigation/MainStack";
import { UserProvider } from "./src/context/UserContext"; // Importar el contexto
import { AppDataContextProvider } from "./src/context/AppDataContext";
import firebase from '@react-native-firebase/app';

const App = () => {
  return (
    <UserProvider>
       <AppDataContextProvider>
      <MainStack />
      </AppDataContextProvider>
    </UserProvider>
  );
}

export default App;
