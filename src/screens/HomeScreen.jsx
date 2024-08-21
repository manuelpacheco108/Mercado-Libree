import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import NavBar from "../components/NavBar";
import Styles from "../styles/navBarStyles";
import Search from "./Search"
import BuyCart from './BuyCar';

const Drawer = createDrawerNavigator();

const HomeContent = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavBar />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Contenido Principal de la Home Screen</Text>
      </View>
    </View>
  );
};

const CustomDrawerContent = (props) => {
  return (
    <View>
      <View style={Styles.drawerHeader}>
        <Icon name="person-circle" size={80} color="black" />
        <Button title="Iniciar sesión" onPress={() => { /* Manejar inicio de sesión */ }} />
      </View>
      
      <DrawerItemList {...props} />
    </View>
  );
};

const HomeScreen = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />
      }
      screenOptions={{
        headerShown: false
      }}
    >
      <Drawer.Screen name="Inicio" component={HomeContent}
      />
      <Drawer.Screen name="Buscar" component={Search} />
      <Drawer.Screen name="Carrito" component={BuyCart} />

    </Drawer.Navigator>
  );
};

export default HomeScreen;
