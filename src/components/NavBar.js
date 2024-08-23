import React from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from "../styles/navBarStyles";
import { useNavigation } from '@react-navigation/native';



const NavBar = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={Styles.container}>
        <Pressable
          style={Styles.hamburguerMenu}
          onPress={() => navigation.openDrawer()}
        >
          <Icon name="menu" size={30} color="black" />
        </Pressable>

        <View style={Styles.searchContainer}>
          <Icon name="search" size={20} color="gray" style={Styles.searchIcon} />
          <TextInput
            style={Styles.searchInput}
            placeholder="Buscar en Mercado Libree"
            placeholderTextColor="gray"
            onFocus={() => navigation.navigate('Buscar')}
          />
        </View>

        <Pressable
          style={Styles.cart}
          onPress={() => navigation.navigate('Carrito')}
        >
          <Icon name="cart" size={30} color="black" />
        </Pressable>
      </View>
      <View style={Styles.containerUbication}>
        <Text style={Styles.ubicationText}>Ingresa tu ubicación</Text>
      </View>
    </View>
  );
};

export default NavBar;