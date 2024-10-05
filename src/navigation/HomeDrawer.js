import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeContent from '../screens/HomeContent';
import Search from '../components/Search';
import Category from '../screens/Category';
import Shopping from '../screens/Shopping';
import Offer from '../screens/Offer';
import Profile from '../screens/Profile';
import Support from '../screens/Support';
import Favorite from '../screens/Favorite';
import DrawerNavigation from '../components/DrawerNavigation';

const Drawer = createDrawerNavigator();
const HomeDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerNavigation.CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Inicio" component={HomeContent} />
      <Drawer.Screen name="Buscar" component={Search} />
      <Drawer.Screen name="Categorias" component={Category} />
      <Drawer.Screen name="Mis Compras" component={Shopping} />
      <Drawer.Screen name="Mis Favoritos" component={Favorite} />
      <Drawer.Screen name="Ofertas" component={Offer} />
      <Drawer.Screen name="Mi perfil" component={Profile} />
      <Drawer.Screen name="Ayuda y Soporte" component={Support} />

    </Drawer.Navigator>
  );
}

export default HomeDrawer;