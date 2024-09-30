import React from "react";
import MainStack from "./src/navigation/MainStack";
import { AppDataContextProvider } from "./src/context/AppDataContext";

const App = () => {
  return (
    <AppDataContextProvider>
      <MainStack />
    </AppDataContextProvider>
  );
}

export default App;