import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import HamburguerNavigation from "./src/navigation/HamburguerNavigation";
import { NavigationContainer } from "@react-navigation/native";


const App = () => {
  return (
    <NavigationContainer>
      <HamburguerNavigation/>
    </NavigationContainer>
  
);
}

export default App;