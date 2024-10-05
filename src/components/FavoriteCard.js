import React, { useContext } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import favoriteStyles from '../styles/favoriteStyles';
import { Card } from 'react-native-paper';
import MyOwnButton from '../components/MyOwnButton';
import AppDataContext from '../context/AppDataContext'; // Importar el contexto

const FavoriteCard = ({ product, navigation }) => {
    const { removeFromFavorites } = useContext(AppDataContext); // Obtener la función para eliminar favoritos

    return (
        <View style={favoriteStyles.favoriteCardContainer}>
            <Pressable style={favoriteStyles.favoriteContainer} onPress={() => navigation.navigate('ProductDetail', { product })}>
                <Image style={favoriteStyles.image} source={product.photo} />
                <Card style={favoriteStyles.card}>
                    <View style={favoriteStyles.textContainer}>
                        <Text style={favoriteStyles.title}>{product.name}</Text>
                        <Text style={favoriteStyles.description}>{product.description}</Text>
                        <Text style={favoriteStyles.description}>Valor: {product.discount}</Text>
                        <Text style={favoriteStyles.description}>Disponible: {product.status}</Text>
                    </View>
                </Card>
            </Pressable>
            <MyOwnButton
                title="Quitar de Favoritos"
                style={favoriteStyles.removeButton}
                onPress={() => removeFromFavorites(product.id)} // Usar product.id para eliminar el favorito
            />
        </View>
    );
};

export default FavoriteCard;
