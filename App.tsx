import React from "react";
import { View, Image, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import Styles from "./src/styles/navBarStyles";
import Search from "./src/components/Search"
import HomeScreen from "./src/screens/HomeScreen";
import Category from "./src/screens/Category"
import Shopping from "./src/screens/Shopping"
import Favorite from "./src/screens/Favorite";
import Offer from "./src/screens/Offer";
import Profile from "./src/screens/Profile";
import Support from "./src/screens/Support";
import MainStack from "./src/navigation/MainStack";



const App = () => {
  return (<MainStack />
  );
}

export default App;