import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import favoriteStyles from '../styles/favoriteStyles';
import { Card } from 'react-native-paper';

const FavoriteCard = ({ product, navigation }) => {
    return (
        <View>
            <Pressable style={favoriteStyles.favoriteContainer} onPress={() => navigation.navigate('ProductDetail', { product })}>
            <Image style={favoriteStyles.image} source={product.photo} />
            <Card style={favoriteStyles.card}>
            <View style={favoriteStyles.textContainer}>
                <Text style={favoriteStyles.title}>{product.name}</Text>
                <Text style={favoriteStyles.description}>{product.description}</Text>
                <Text style={favoriteStyles.description}>Valor: {product.price}</Text>
                <Text style={favoriteStyles.status}>Disponible: {product.status} </Text>
            </View>
            </Card>
            </Pressable>
        </View>
    );
};
export default FavoriteCard;