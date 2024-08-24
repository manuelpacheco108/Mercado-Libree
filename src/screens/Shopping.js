import React from 'react';
import { View, Text, FlatList, Pressable, Image } from 'react-native';
import CategoryCard from '../components/ShoppingCard';
import shoppingStyles from '../styles/shoppingStyles';

const product = [
  {
    id: 1,
    photo: require('../img/mic.png'),
    name: 'Micrófono',
    description: 'Microfono Sony con supresión de sonido',
    price: '100000$',
    status: 'En tránsito - 07/07/2024',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../img/mastercard.png'),
    visa: require('../img/visa.png'),
    bancolombia: require('../img/bancolombia.png')
  },
  {
    id: 2,
    photo: require('../img/chair.jpg'),
    name: 'Silla',
    description: 'Silla de madera en color negro de alta calidad',
    price: '70000$',
    status: 'Cancelado - 01/03/2024',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../img/mastercard.png'),
    visa: require('../img/visa.png'),
    bancolombia: require('../img/bancolombia.png')
  },
  {
    id: 3,
    photo: require('../img/ball.png'),
    name: 'Pelota para Gatos',
    description: 'Pelota saltarina recargable para mascotas',
    price: '40000$',
    status: 'Entregado - 08/18/2023',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../img/mastercard.png'),
    visa: require('../img/visa.png'),
    bancolombia: require('../img/bancolombia.png')
  }
]

const Menu = ({ navigation }) => {
  return (
    <View style={shoppingStyles.menuContainer}>
      <Pressable
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
      </Pressable>
      <Text style={shoppingStyles.textShopping}>Mis Compras</Text>
    </View>
  );
};

const Shopping = ({ navigation }) => {
  return (
    <View>
      <Menu navigation={navigation} />
      <FlatList
        data={product}
        renderItem={({ item }) => <CategoryCard product={item} navigation={navigation} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

export default Shopping;