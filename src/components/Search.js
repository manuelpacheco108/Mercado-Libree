import React from "react";
import { Button, Image, ImageBackground, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import Styles from "../styles/navBarStyles"

const Search = () => {
    return (
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
            <TouchableOpacity style={Styles.cart}>
                <Image style={Styles.iconImg}
                    source={require('../img/shopping_cart.png')}
                />
            </TouchableOpacity>
            
        </View>
    );
}

export default Search;
