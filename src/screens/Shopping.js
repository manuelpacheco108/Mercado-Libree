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
    status: 'En tránsito - 07/07/2024'
  },
  {
    id: 2,
    photo: require('../img/chair.jpg'),
    name: 'Silla',
    description: 'Silla de madera en color negro',
    status: 'Cancelado - 01/03/2024 '
  },
  {
    id: 3,
    photo: require('../img/ball.png'),
    name: 'Pelota para Gatos',
    description: 'Pelota saltarina recargable',
    status: 'Entregado - 08/18/2023'
  }
]

const Menu = () => {
  return (
    <View style={shoppingStyles.menuContainer}>
      <TouchableOpacity style={shoppingStyles.menuButton} onPress={() => console.log('Menu clicked')}>
        <Image
          source={require('../img/atras.png')}
          style={shoppingStyles.menuIcon}
        />
      </TouchableOpacity>
      <Text style={shoppingStyles.textShopping}>Mis Compras</Text>
    </View>
  );
};

const Categories = () => {
  return (
    <View>
      <Menu />
      <FlatList
        data={shopping}
        renderItem={({ item }) => <CategoryCard shopping={item} />}
        keyExtractor={(item) => item.id.toString()}
      />

    </View>
  );
}

export default Categories;