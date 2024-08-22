import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import FavoriteCard from '../components/FavoriteCard';
import favoriteStyles from '../styles/favoriteStyles';

const favorite = [
  {
    id: 1,
    photo: require('../img/mouse.png'),
    name: 'Mouse Gamer',
    description: 'Mouse RedDragon con luces',
    price: '300000$',
    status: 'Sí'
  },
  {
    id: 2,
    photo: require('../img/glass.png'),
    name: 'Vaso Cars',
    description: 'Vaso de la película Cars',
    price: '35000$',
    status: 'No'
  },
  {
    id: 3,
    photo: require('../img/belt.jpg'),
    name: 'Correa',
    description: 'Correa de cuero cafe',
    price: '40000$',
    status: 'No'
  }
]

const Menu = ({navigation}) => {
  return (
    <View style={favoriteStyles.menuContainer}>
      <TouchableOpacity 
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
      </TouchableOpacity>
      <Text style={favoriteStyles.textFavorites}>Mis Favoritos</Text>
    </View>
  );
};

const Favorite = ({navigation}) => {
  return (
    <View>
      <Menu navigation={navigation}/>
      <FlatList
        data={favorite}
        renderItem={({ item }) => <FavoriteCard favorite={item} />}
        keyExtractor={(item) => item.id.toString()}
      />

    </View>
  );
}

export default Favorite; 