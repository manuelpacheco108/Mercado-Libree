import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import NavBar from "../components/NavBar";
import Styles from "../styles/navBarStyles";
import Search from '../components/Search';
import Category from './Category';
import Shopping from './Shopping';
import Offer from './Offer';
import Profile from './Profile';
import Support from './Support';
import Product from '../components/HomeContent';
import productStyles from '../styles/ProductStyles';
import Favorite from './Favorite';

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

const CustomDrawerContent = (props) => {
  return (
    <View>
      <View style={Styles.drawerHeader}>
      <Image 
          source={require('../img/user.png')}
          style={Styles.menuIcon}
        />
        <Button title="Iniciar sesión" onPress={() => {      }} />
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