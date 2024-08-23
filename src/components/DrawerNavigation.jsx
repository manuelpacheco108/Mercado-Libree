import React, {useState} from 'react';
import { View, Image,Pressable, Text } from 'react-native';
import Styles from '../styles/navBarStyles';
import DrawerNavigationStyles from '../styles/stylesDrawerNavigation'
import { useNavigation } from '@react-navigation/native';
import { DrawerItemList } from '@react-navigation/drawer';
import MyOwnButton from './MyOwnButton';
import {imgs } from "../styles/globalStyles";


const CustomDrawerContent = (props) => {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState('');

  const handleLogout = () => {
      setUserEmail('');
      navigation.navigate('Inicio');
  };

  return (
      <View>
          <View style={Styles.drawerHeader}>
              <Image source={require('../img/icon_user.png')} style={imgs.iconLoginUser} />
              {userEmail ? (
                  <View>
                      <Text>{userEmail}</Text>
                      <MyOwnButton
                          title="Cerrar Sesión"
                          onPress={handleLogout}
                      />
                  </View>
              ) : (
                  <MyOwnButton
                      title="Iniciar Sesión"
                      onPress={() => navigation.navigate('Mi cuenta', { setUserEmail })}
                  />
              )}
          </View>
          <DrawerItemList {...props} />
      </View>
  );
};

const DrawerHeader = ({title}) => {
  
    const navigation = useNavigation();
    return (
    <View style={DrawerNavigationStyles.header}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image source={require('../img/back.png')} style={imgs.rowBack} />
        <Text style={DrawerNavigationStyles.text}>{title}</Text>
      </Pressable>
    </View>
    );
  }
  export default {DrawerHeader, CustomDrawerContent}