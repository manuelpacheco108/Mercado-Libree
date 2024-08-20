import React from "react";
import { Button, Image, ImageBackground, TextInput, Touchable, TouchableOpacity, View, Text, } from "react-native";
import Styles from "../styles/navBarStyles"
import { useNavigation } from '@react-navigation/native';




const NavBar = () => {
    const navigation = useNavigation();
    return (
        <View>
            <View style={Styles.container}>
                <TouchableOpacity style={Styles.hamburguerMenu} >
                    <Image style={Styles.iconImg}
                        source={require('../img/menu_hamburguer.png')}
                    />
                </TouchableOpacity>
                <View style={Styles.searchContainer}>
                    <Image
                        style={Styles.searchIcon}
                        source={require('../img/search_icon.png')}
                    />
                    <TextInput style={Styles.searchInput}
                        placeholder="Buscar en Mercado Libree"
                        placeholderTextColor={Styles.searchInput.color}

                    />
                </View>
                <TouchableOpacity
                    style={Styles.cart}
                    onPress={() => navigation.openDrawer()}
                >
                    <Image style={Styles.iconImg}
                        source={require('../img/shopping_cart.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={Styles.containerUbication}>
                    <Text style={Styles.ubicationText}>Ingresa tu ubicación</Text>
                </View>
        </View>

    );
}

export default NavBar;
