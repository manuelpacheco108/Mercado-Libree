import React from 'react';
import { View, Text } from 'react-native';
import Styles from '../styles/styleBuyCard'
const BuyCart = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={Styles.prove}>Pantalla del Carrito</Text>
        </View>
    );
};

export default BuyCart;
