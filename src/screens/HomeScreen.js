import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavBar from "../components/NavBar";
import Search from '../components/Search';
import Category from './Category';
import Shopping from './Shopping';
import Offer from './Offer';
import Profile from './Profile';
import Support from './Support';
import Product from '../components/Product';
import Favorite from './Favorite';
import DrawerNavigation from '../components/DrawerNavigation';

const Drawer = createDrawerNavigator();

const HomeContent = ({navigation}) => {
  return (
    <View>
      <NavBar />
      <View>
       <Product navigation={navigation}/>
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
      <Drawer.Screen name="Buscar" component={Search}/>
      <Drawer.Screen name="Cateogorias" component={Category}/>
      <Drawer.Screen name="Mis Compras" component={Shopping}/>
      <Drawer.Screen name="Mis Favoritos" component={Favorite}/>
      <Drawer.Screen name="Ofertas" component={Offer}/>
      <Drawer.Screen name="Mi perfil" component={Profile}/>
      <Drawer.Screen name="Ayuda y Soporte" component={Support}/>
      
    </Drawer.Navigator>
  );
}


export default HomeScreen;