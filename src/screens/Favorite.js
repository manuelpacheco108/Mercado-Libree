import React, { useContext } from 'react';
import { View, Text, FlatList, Image, Pressable } from 'react-native';
import FavoriteCard from '../components/FavoriteCard';
import favoriteStyles from '../styles/favoriteStyles';
import AppDataContext from '../context/AppDataContext';
import { ScrollView } from 'react-native-gesture-handler';

const Menu = ({ navigation }) => {
  return (
    <View style={favoriteStyles.menuContainer}>
      <Pressable
        style={favoriteStyles.menuButton}
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'HomeDrawer' }],
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
  const { favorites } = useContext(AppDataContext); 

  return (
    <ScrollView>
      <View>
        <Menu navigation={navigation} />
        <FlatList
          data={favorites}
          renderItem={({ item }) => <FavoriteCard product={item} navigation={navigation} />}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={<Text style={favoriteStyles.emptyFavoriteText}> Aún no tienes favoritos 🚑 </Text>}
        />
      </View>
    </ScrollView>
  );
}

export default Favorite;
