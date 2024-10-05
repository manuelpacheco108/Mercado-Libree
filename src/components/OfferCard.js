import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import offersStyles from '../styles/offersStyles';

const ProductCard = ({ product, navigation }) => {
    return (
        <View style={offersStyles.container}>
            <Pressable onPress={() => navigation.navigate('ProductDetail', { product })}>
                <Image style={offersStyles.image} source={product.photo} />
                <Text style={offersStyles.title}>{product.name}</Text>
                <Text style={offersStyles.text}>{product.description}</Text>
                <Text style={offersStyles.textPrice}>${product.price} COP</Text>
                <Text style={offersStyles.offerPrice}>${product.discount} COP
                    <Text style={offersStyles.offerValue}>{product.offerValue}</Text>
                </Text>
            </Pressable>
        </View>
    );
};

export default ProductCard  