import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import productStyles from '../styles/productStyles';

const ProductCard = ({ product, navigation }) => {
    return (
        <View style={productStyles.container}>
            <Pressable onPress={() => navigation.navigate('ProductDetail', { product })}>
                <Image style={productStyles.image} source={product.photo} />
                <Text style={productStyles.title}>{product.name}</Text>
                <Text style={productStyles.text}>{product.description}</Text>
                <Text style={productStyles.textPrice}>${product.price} COP</Text>
                <Text style={productStyles.offerPrice}>${product.discount} COP <Text style={productStyles.offerValue}>{product.offerValue}</Text></Text>
            </Pressable>
        </View>
    );
};

export default ProductCard   