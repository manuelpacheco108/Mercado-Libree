import React, { useContext } from 'react';
import { View, Image, Pressable, Text } from 'react-native';
import Styles from '../styles/navBarStyles';
import { DrawerItemList } from '@react-navigation/drawer';
import { imgs } from "../styles/globalStyles";
import suportStyle from '../styles/suportStyle';
import { UserContext } from '../context/UserContext'; // Importar el contexto


const CustomDrawerContent = (props) => {
    const { currentUser } = useContext(UserContext); // Obtener el usuario actual
  
    return (
      <View>
        <View style={Styles.drawerHeader}>
          <Image
            source={
              currentUser?.profilePhoto
                ? { uri: currentUser.profilePhoto } // Usar la URL de la imagen del usuario
                : require('../img/icon_user.png') // Imagen predeterminada
            }
            style={imgs.iconLoginUser}
          />
        </View>
        <DrawerItemList {...props} />
      </View>
    );
  };

const Menu = ({ navigation }) => {
    return (
        <View style={suportStyle.menuContainer}>
            <Pressable
                style={suportStyle.menuButton}
                onPress={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }],
                    });
                }}
            >
                <Image
                    source={require('../img/back.png')}
                    style={suportStyle.menuIcon}
                />
            </Pressable>
            <Text style={suportStyle.textSupport}>Volver</Text>
        </View>
    );
};
export default { Menu, CustomDrawerContent }