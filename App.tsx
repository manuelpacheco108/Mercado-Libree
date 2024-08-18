import React from "react";
import { View, Image, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import Styles from "./src/styles/navBarStyles";
import Search from "./src/components/Search"


const App = () => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.hamburguerMenu} >
        <Image style={Styles.iconImg}
          source={require('./src/img/menu_hamburguer.png')}
        />
      </TouchableOpacity>
      <View style={Styles.searchContainer}>
        <Image 
        style={Styles.searchIcon}
        source={require('./src/img/search_icon.png')}
        />
        <TextInput style={Styles.searchInput}
          placeholder="Buscar en Mercado Libree"
          
        />
      </View>
      <TouchableOpacity style={Styles.cart}>
        <Image style={Styles.iconImg}
          source={require('./src/img/shopping_cart.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

export default App;