import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavBar from "../components/NavBar";
import Search from "./Search";
import BuyCart from './BuyCart';
import LoginUser from './LoginUser';
import RegisterUser from './RegisterUser';
import DrawerNavigation from '../components/DrawerNavigation';

const Drawer = createDrawerNavigator();

const HomeContent = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavBar />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'black' }}>Contenido Principal de la Home Screen</Text>
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
      <Drawer.Screen name="Mi cuenta" component={LoginUser} />
      <Drawer.Screen
        name="RegisterUser"
        component={RegisterUser}
        options={{ drawerLabel: () => null, title: null }} 
      />
    </Drawer.Navigator>
  );
};export default HomeScreen;