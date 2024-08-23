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