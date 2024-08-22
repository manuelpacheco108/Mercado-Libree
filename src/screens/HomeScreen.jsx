import React from 'react';
import { View, Text, Image } from 'react-native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import NavBar from "../components/NavBar";
import MyOwnButton from "../components/MyOwnButton"
import Styles from "../styles/navBarStyles";
import {imgs } from "../styles/globalStyles";
import Search from "./Search";
import BuyCart from './BuyCar';
import LoginUser from './LoginUser';
import { useNavigation } from '@react-navigation/native';

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

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={Styles.drawerHeader}>
        <Image source={require('../img/icon_user.png')} style={imgs.iconLoginUser} />
        <MyOwnButton
          title="Iniciar Sesión"
          onPress={() => navigation.navigate('LoginUser')}
        />
      </View>


      <DrawerItemList {...props} />
    </View>
  );
};

const HomeScreen = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Inicio" component={HomeContent} />
      <Drawer.Screen name="Buscar" component={Search} />
      <Drawer.Screen name='Carrito' component={BuyCart} />
      <Drawer.Screen name='Mi Cuenta' component={LoginUser} />
    </Drawer.Navigator>
  );
};

export default HomeScreen;
