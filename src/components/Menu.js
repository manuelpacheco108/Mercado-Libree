import React from 'react';
import {View, Text, Image, Pressable } from 'react-native';
import styles from '../styles/globalStyles';

const Menu = () => {
    return (
        <View style={styles.menuContainer}>
            <Pressable style={styles.menuButton} onPress={() => console.log('Menu clicked')}>
                <Image
                    source={require('../img/atras.png')}
                    style={styles.menuIcon}
                />
            </Pressable>
            <Text style={styles.textCategories}>Categorias</Text>
            
        </View>
    );
};

export default Menu;
