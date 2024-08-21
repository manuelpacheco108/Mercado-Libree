import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Styles from '../styles/styleBuyCard'


const BuyCart = ({ navigation }) => {
    return (
        <View>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={require('../img/back.png')}
                        style={{width: 24,
                            height: 24,}}
                    />
                </TouchableOpacity>
                <Text style={Styles.prove}>Carrito</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={Styles.prove}>Pantalla del Carrito</Text>
            </View>
        </View>

    );
};

export default BuyCart;
