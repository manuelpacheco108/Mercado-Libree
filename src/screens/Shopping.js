import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import CategoryCard from '../components/ShoppingCard';
import shoppingStyles from '../styles/shoppingStyles';

const shopping = [
  {
    id: 1,
    photo: require('../img/mic.png'),
    name: 'Micrófono',
    description: 'Microfono Sony con supresión de sonido',
    price: '100000$',
    status: 'En tránsito - 07/07/2024'
  },
  {
    id: 2,
    photo: require('../img/chair.jpg'),
    name: 'Silla',
    description: 'Silla de madera en color negro',
    price: '70000$',
    status: 'Cancelado - 01/03/2024'
  },
  {
    id: 3,
    photo: require('../img/ball.png'),
    name: 'Pelota para Gatos',
    description: 'Pelota saltarina recargable',
    price: '40000$',
    status: 'Entregado - 08/18/2023'
  }
]

const Menu = ({navigation}) => {
  return (
    <View style={shoppingStyles.menuContainer}>
      <TouchableOpacity 
        style={shoppingStyles.menuButton} 
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          });
        }}
      >
        <Image
          source={require('../img/back.png')}
          style={shoppingStyles.menuIcon}
        />
      </TouchableOpacity>
      <Text style={shoppingStyles.textShopping}>Mis Compras</Text>
    </View>
  );
};


const Shopping = ({navigation}) => {
  return (
    <View>
      <Menu navigation={navigation} />
      <FlatList
        data={shopping}
        renderItem={({ item }) => <CategoryCard shopping={item} />}
        keyExtractor={(item) => item.id.toString()}
      />

    </View>
  );
}

export default Shopping;