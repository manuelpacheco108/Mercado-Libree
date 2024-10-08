import React from 'react';
import { View, Text, FlatList, Pressable, Image, ScrollView } from 'react-native';
import productStyles from '../../styles/productStyles';
import ProductCard from '../../components/ProductCard';

const product = [
  {
    id: 19,
    photo: require('../../img/beltPet.png'),
    name: 'Correa',
    description: 'Correa dinamica para mascotas',
    price: '100000',
    discount: '95000',
    offerValue: '5%OFF',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../../img/mastercard.png'),
    visa: require('../../img/visa.png'),
    bancolombia: require('../../img/bancolombia.png'),
    status: 'Si'
  },
  {
    id: 20,
    photo: require('../../img/ball.png'),
    name: 'Pelota',
    description: 'Pelota saltarina para mascotas',
    price: '400000',
    discount: '95000',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../../img/mastercard.png'),
    visa: require('../../img/visa.png'),
    bancolombia: require('../../img/bancolombia.png'),
    status: 'Si'
  },
  {
    id: 21,
    photo: require('../../img/drink.png'),
    name: 'Bebedero',
    description: 'Bebedero para mascotas inoxidable',
    price: '2000000',
    discount: '700000',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../../img/mastercard.png'),
    visa: require('../../img/visa.png'),
    bancolombia: require('../../img/bancolombia.png'),
    status: 'Si'
  },
  {
    id: 22,
    photo: require('../../img/eat.jpg'),
    name: 'Comedero',
    description: 'Comedero para mascotas de varios colores',
    price: '200000',
    discount: '130000',
    offerValue: '35%OFF',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../../img/mastercard.png'),
    visa: require('../../img/visa.png'),
    bancolombia: require('../../img/bancolombia.png'),
    status: 'Si'
  },
  {
    id: 23,
    photo: require('../../img/shirt.png'),
    name: 'Camisa',
    description: 'Camisa comodas para mascotas',
    price: '2530000',
    discount: '95000',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../../img/mastercard.png'),
    visa: require('../../img/visa.png'),
    bancolombia: require('../../img/bancolombia.png'),
    status: 'Si'
  },
  {
    id: 24,
    photo: require('../../img/bone.png'),
    name: 'Hueso',
    description: 'Hueso para mascotas comestible',
    price: '100000',
    discount: '95000',
    offerValue: '5%OFF',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../../img/mastercard.png'),
    visa: require('../../img/visa.png'),
    bancolombia: require('../../img/bancolombia.png'),
    status: 'Si'
  }
]

const Menu = ({ navigation }) => {
  return (
    <View style={productStyles.menuContainer}>
      <Pressable
        style={productStyles.menuButton}
        onPress={() => navigation.navigate('Category')}
      >
        <Image
          source={require('../../img/back.png')}
          style={productStyles.menuIcon}
        />
      </Pressable>
      <Text style={productStyles.textProduct}>Mascotas</Text>
    </View>
  );
};

const Pet = ({ navigation }) => {
  return (
    <ScrollView>
      <Menu navigation={navigation} />
      <FlatList
        data={product}
        renderItem={({ item }) => <ProductCard product={item} navigation={navigation} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={productStyles.row}
      />

    </ScrollView>
  );
}

export default Pet;