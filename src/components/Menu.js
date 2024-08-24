import React from 'react';
import {View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/globalStyles';

const Menu = () => {
    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuButton} onPress={() => console.log('Menu clicked')}>
                <Image
                    source={require('../img/atras.png')}
                    style={styles.menuIcon}
                />
            </TouchableOpacity>
            <Text style={styles.textCategories}>Categorias</Text>
            
        </View>
    );
};

export default Menu;