import React from 'react';
import { View, Text, Image } from 'react-native';
import favoriteStyles from '../styles/favoriteStyles';

const FavoriteCard = ({ favorite }) => {
    return (
        <View style={favoriteStyles.shoppingContainer}>
            <Image style={favoriteStyles.image} source={favorite.photo} />
            <View style={favoriteStyles.textContainer}>
                <Text style={favoriteStyles.title}>{favorite.name}</Text>
                <Text style={favoriteStyles.description}>{favorite.description}</Text>
                <Text style={favoriteStyles.description}>Valor: {favorite.price}</Text>
                <Text style={favoriteStyles.status}>Disponible: {favorite.status} </Text>

            </View>
        </View>
    );
};
export default FavoriteCard;