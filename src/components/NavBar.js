import React from 'react';
import { View, TextInput, Pressable, Image } from 'react-native';
import Styles from "../styles/navBarStyles";
import { useNavigation } from '@react-navigation/native';
import productStyles from '../styles/ProductStyles';

const NavBar = () => {
  const navigation = useNavigation(); 

  return (
    <View>
      <View style={Styles.container}>
        <Pressable
          style={Styles.hamburguerMenu}
          onPress={() => navigation.openDrawer()}
        >
         <Image 
          source={require('../img/menu_hamburguer.png')}
          style={productStyles.menuIcon}
        />
        </Pressable>

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

        <Pressable
          style={Styles.cart}
          onPress={() => navigation.navigate('BuyCart')}
        >
         <Image 
          source={require('../img/shopping_cart.png')}
          style={productStyles.menuIcon}
        />
        </Pressable>
      </View>
      
    </View>
  );
};

export default NavBar;
