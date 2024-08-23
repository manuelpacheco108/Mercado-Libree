import React from 'react';
import { View, Text, Image } from 'react-native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import NavBar from "../components/NavBar";
import MyOwnButton from "../components/MyOwnButton"
import StylesHomeScreen from "../styles/stylesHomeScreen"
import Search from "./Search";
import BuyCart from './BuyCart';
import LoginUser from './LoginUser';
import RegisterUser from './RegisterUser';
import DrawerNavigation from '../components/DrawerNavigation'

const Drawer = createDrawerNavigator();

const HomeContent = () => {
  return (
    <View style={StylesHomeScreen.container}>
      <NavBar />
      <View style={StylesHomeScreen.contentContainer}>
        <Text style={StylesHomeScreen.text}>Contenido Principal de la Home Screen</Text>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerNavigation.CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Inicio" component={HomeContent} />
      <Drawer.Screen name="Buscar" component={Search} />
      <Drawer.Screen name='Carrito' component={BuyCart} />
      <Drawer.Screen
        name="Mi cuenta"
        component={LoginUser}
      />
      <Drawer.Screen
        name="RegisterUser"
        component={RegisterUser}
        options={{ drawerLabel: () => null, title: null }}
      />
    </Drawer.Navigator>
  );
};

export default HomeScreen;
