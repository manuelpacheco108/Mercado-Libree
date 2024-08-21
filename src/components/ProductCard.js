import React from 'react';
import { View, Text, Image } from 'react-native';
import offerStyles from '../styles/ProductStyles';

const ProductCard = ({ product }) => {
    return (
        <View style={offerStyles.container}>
           <Image style={offerStyles.image} source={product.photo} />
            <Text style={offerStyles.title}>{product.name}</Text>
            <Text style={offerStyles.text}>{product.description}</Text>
            <Text style={offerStyles.textPrice}>{product.price}</Text>
            <Text style={offerStyles.offerPrice}>{product.discount} <Text style={offerStyles.offerValue}>{product.offerValue}</Text></Text>

        </View>
    );
};
 
export default ProductCard