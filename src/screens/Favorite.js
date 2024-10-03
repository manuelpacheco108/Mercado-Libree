import React, { useContext } from 'react';
import { View, Text, FlatList, Image, Pressable } from 'react-native';
import FavoriteCard from '../components/FavoriteCard';
import favoriteStyles from '../styles/favoriteStyles';
import AppDataContext from '../context/AppDataContext'; // Importar el contexto
import productStyles from '../styles/ProductStyles';

const Menu = ({ navigation }) => { 
  return (
    <View style={favoriteStyles.menuContainer}>
      <Pressable 
        style={favoriteStyles.menuButton} 
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          });
        }}
      >
        <Image
          source={require('../img/back.png')}
          style={favoriteStyles.menuIcon}
        />
      </Pressable>
      <Text style={favoriteStyles.textFavorites}>Mis Favoritos</Text>
    </View>
  );
};

const Favorite = ({ navigation }) => {
  const { favorites } = useContext(AppDataContext); // Obtener la lista de favoritos del contexto

  return (
    <View>
      <Menu navigation={navigation} />
      <FlatList
        data={favorites} // Usar la lista de favoritos en lugar de la lista estática
        renderItem={({ item }) => <FavoriteCard product={item} navigation={navigation} />}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text style={productStyles.titleProduct}>No tienes favoritos aún</Text>} // Mensaje cuando no hay favoritos
      />
    </View>
  );
}

export default Favorite;
