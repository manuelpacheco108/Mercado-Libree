import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import shoppingStyles from '../styles/shoppingStyles';
import { Card } from 'react-native-paper'; 

const ShoppingCard = ({ product, navigation }) => {
    return (
        <View style={shoppingStyles.shoppingContainer}>
            <Pressable style={shoppingStyles.shoppingContainer} onPress={() => navigation.navigate('ProductDetail', { product })}>
            <Image style={shoppingStyles.image} source={product.photo} />
            <Card style={shoppingStyles.card}>
                <Text style={shoppingStyles.title}>{product.name}</Text>
                <Text style={shoppingStyles.description}>{product.description}</Text>
                <Text style={shoppingStyles.description}>Valor: {product.price}</Text>
            </Card>
            </Pressable>
        </View>
    );
};

export default ShoppingCard;
