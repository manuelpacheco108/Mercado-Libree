import React from "react";
import MainStack from "./src/navigation/MainStack";
import { UserProvider } from "./src/context/UserContext"; // Importar el contexto

const App = () => {
  return (
    <UserProvider>
      <MainStack />
    </UserProvider>
  );
}

export default App;
