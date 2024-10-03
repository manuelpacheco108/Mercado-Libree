import React from 'react';
import { View, FlatList } from 'react-native';
import productStyles from '../styles/ProductStyles';
import ProductCard from './ProductCard';

const product = [
  {
    id: 25,
    photo: require('../img/headphones.png'),
    name: 'Audífonos',
    description: 'Audífonos inalámbricos grises',
    price: '100000$',
    discount: '95000$',
    offerValue: '5%OFF',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../img/mastercard.png'),
    visa: require('../img/visa.png'),
    bancolombia: require('../img/bancolombia.png')
  },
  {
    id: 26,
    photo: require('../img/mouse.png'),
    name: 'Mouse',
    description: 'Mouse gamer RedDragon con luces',
    price: '500000$',
    discount: '95000$',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../img/mastercard.png'),
    visa: require('../img/visa.png'),
    bancolombia: require('../img/bancolombia.png')

  },
  {
    id: 27,
    photo: require('../img/tecno.png'),
    name: 'Celular',
    description: 'Celular Xiaomi azul brillante',
    price: '4500000$',
    discount: '700000$',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../img/mastercard.png'),
    visa: require('../img/visa.png'),
    bancolombia: require('../img/bancolombia.png')
  },
  {
    id: 28,
    photo: require('../img/battery.jpg'),
    name: 'Batería',
    description: 'Batería portátil con linterna',
    price: '200000$',
    discount: '130000$',
    offerValue: '35%OFF',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../img/mastercard.png'),
    visa: require('../img/visa.png'),
    bancolombia: require('../img/bancolombia.png')
  },
  {
    id: 29,
    photo: require('../img/watch.png'),
    name: 'Reloj',
    description: 'Reloj digital con manillas azules',
    price: '800000$',
    discount: '95000$',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../img/mastercard.png'),
    visa: require('../img/visa.png'),
    bancolombia: require('../img/bancolombia.png')
  },
  {
    id: 30,
    photo: require('../img/camera.png'),
    name: 'Cámara',
    description: 'Cámara digital Nikon negra',
    price: '100000$',
    discount: '95000$',
    offerValue: '5%OFF',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../img/mastercard.png'),
    visa: require('../img/visa.png'),
    bancolombia: require('../img/bancolombia.png')
  }
]
 

const Product = ({navigation}) => {
  return (
    <View>
      <FlatList
        data={product}
        renderItem={({ item }) => <ProductCard product={item} navigation={navigation} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={productStyles.row} 
      />

    </View>
  );
}

export default Product;