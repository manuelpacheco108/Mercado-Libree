import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import Styles from "../styles/navBarStyles";
import { useNavigation } from '@react-navigation/native';
import productStyles from '../styles/ProductStyles';



const NavBar = () => {
  const navigation = useNavigation(); 

  return (
    <View>
      <View style={Styles.container}>
        <TouchableOpacity
          style={Styles.hamburguerMenu}
          onPress={() => navigation.openDrawer()}
        >
         <Image 
          source={require('../img/menu_hamburguer.png')}
          style={productStyles.menuIcon}
        />
        </TouchableOpacity>

        <View style={Styles.searchContainer}>
        <Image 
          source={require('../img/search-interface-symbol.png')}
          style={productStyles.menuIconSearch}
        />
          <TextInput
            style={Styles.searchInput}
            placeholder="Buscar en Mercado Libree"
            placeholderTextColor="gray"
            onFocus={() => navigation.navigate('Buscar')}
          />
        </View>

        <TouchableOpacity
          style={Styles.cart}
          onPress={() => navigation.navigate('BuyCart')}
        >
         <Image 
          source={require('../img/shopping_cart.png')}
          style={productStyles.menuIcon}
        />
        </TouchableOpacity>
      </View>
      <View style={Styles.containerUbication}>
        <Text style={Styles.ubicationText}>Ingresa tu ubicación</Text>
      </View>
    </View>
  );
};

export default NavBar;