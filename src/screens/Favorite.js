import React from 'react';
import { View, Text, FlatList, Image, Pressable } from 'react-native';
import FavoriteCard from '../components/FavoriteCard';
import favoriteStyles from '../styles/favoriteStyles';

const product = [
  {
    id: 1,
    photo: require('../img/mouse.png'),
    name: 'Mouse Gamer',
    description: 'Mouse RedDragon con luces',
    price: '300000$',
    status: 'Sí',
    discount: '95000$',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../img/mastercard.png'),
    visa: require('../img/visa.png'),
    bancolombia: require('../img/bancolombia.png')
  },
  {
    id: 2,
    photo: require('../img/glass.png'),
    name: 'Vaso Cars',
    description: 'Vaso de la película Cars',
    price: '35000$',
    status: 'No',
    discount: '95000$',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../img/mastercard.png'),
    visa: require('../img/visa.png'),
    bancolombia: require('../img/bancolombia.png')
  },
  {
    id: 3,
    photo: require('../img/belt.jpg'),
    name: 'Correa',
    description: 'Correa de cuero cafe',
    price: '40000$',
    status: 'No',
    discount: '95000$',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../img/mastercard.png'),
    visa: require('../img/visa.png'),
    bancolombia: require('../img/bancolombia.png')
  }
]

const Menu = ({navigation}) => {
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

const Favorite = ({navigation}) => {
  return (
    <View>
      <Menu navigation={navigation}/>
      <FlatList
        data={product}
        renderItem={({ item }) => <FavoriteCard product={item} navigation={navigation}/>}
        keyExtractor={(item) => item.id.toString()}
      />

    </View>
  );
}

export default Favorite; 