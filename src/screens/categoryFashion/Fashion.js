import React from 'react';
import { View, Text, FlatList, Pressable, Image, ScrollView } from 'react-native';
import productStyles from '../../styles/productStyles';
import ProductCard from '../../components/ProductCard';

const product = [
  {
    id: 1,
    photo: require('../../img/tshirt.png'),
    name: 'Camisa',
    description: 'Camisa de spider-man muy masculina',
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
    id: 2,
    photo: require('../../img/pant.jpg'),
    name: 'Pantalón',
    description: 'Pantalones oscuros para trabajar',
    price: '400000',
    discount: '95000',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../../img/mastercard.png'),
    visa: require('../../img/visa.png'),
    bancolombia: require('../../img/bancolombia.png'),
    status: 'Si'
  },
  {
    id: 3,
    photo: require('../../img/shoes.png'),
    name: 'Zapatos',
    description: 'Tenis Jordan 4 azul con blanco',
    price: '2000000',
    discount: '1',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../../img/mastercard.png'),
    visa: require('../../img/visa.png'),
    bancolombia: require('../../img/bancolombia.png'),
    status: 'Si'
  },
  {
    id: 4,
    photo: require('../../img/jacket.png'),
    name: 'Chaqueta',
    description: 'Chaqueta impermeable de color verde',
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
    id: 5,
    photo: require('../../img/hoddie.png'),
    name: 'Saco',
    description: 'Saco medio formal color verde',
    price: '250000',
    discount: '95000',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../../img/mastercard.png'),
    visa: require('../../img/visa.png'),
    bancolombia: require('../../img/bancolombia.png'),
    status: 'Si'
  },
  {
    id: 6,
    photo: require('../../img/littlePant.jpg'),
    name: 'Pantaloneta',
    description: 'Pantalonea pequeña de color amarillo con negro',
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
      <Text style={productStyles.textProduct}>Moda</Text>
    </View>
  );
};

const Fashion = ({ navigation }) => {
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

export default Fashion;