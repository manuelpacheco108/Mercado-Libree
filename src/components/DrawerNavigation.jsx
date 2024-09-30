import React from 'react';
import { View, Image, Pressable, Text } from 'react-native';
import Styles from '../styles/navBarStyles';
import { DrawerItemList } from '@react-navigation/drawer';
import { imgs } from "../styles/globalStyles";
import suportStyle from '../styles/suportStyle';


const CustomDrawerContent = (props) => {
    return (
        <View>
            <View style={Styles.drawerHeader}>
                <Image source={require('../img/icon_user.png')} style={imgs.iconLoginUser} />
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
                        routes: [{ name: 'HomeDrawer' }],
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