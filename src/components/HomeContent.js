import React from 'react';
import { View, FlatList } from 'react-native';
import productStyles from '../styles/ProductStyles';
import ProductCard from '../components/ProductCard';

const product = [
  {
    id: 1,
    photo: require('../img/headphones.png'),
    name: 'Audífonos',
    description: 'Audífonos inalámbricos grises',
    price: '100000$',
    discount: '95000$',
    offerValue: '5%OFF',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../img/mastercard.png'),
    visa: require('../img/visa.png'),
    bancolombia: require('../img/bancolombia.png'),
    status: 'Si'
  },
  {
    id: 2,
    photo: require('../img/mouse.png'),
    name: 'Mouse',
    description: 'Mouse gamer RedDragon con luces',

    discount: '95000$',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../img/mastercard.png'),
    visa: require('../img/visa.png'),
    bancolombia: require('../img/bancolombia.png'),
    status: 'No'

  },
  {
    id: 3,
    photo: require('../img/tecno.png'),
    name: 'Celular',
    description: 'Celular Xiaomi azul brillante',
    discount: '700000$',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../img/mastercard.png'),
    visa: require('../img/visa.png'),
    bancolombia: require('../img/bancolombia.png'),
    status: 'Si'
  },
  {
    id: 4,
    photo: require('../img/battery.jpg'),
    name: 'Batería',
    description: 'Batería portátil con linterna',
    price: '200000$',
    discount: '130000$',
    offerValue: '35%OFF',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../img/mastercard.png'),
    visa: require('../img/visa.png'),
    bancolombia: require('../img/bancolombia.png'),
    status: 'No'
  },
  {
    id: 5,
    photo: require('../img/watch.png'),
    name: 'Reloj',
    description: 'Reloj digital con manillas azules',
    discount: '95000$',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../img/mastercard.png'),
    visa: require('../img/visa.png'),
    bancolombia: require('../img/bancolombia.png'),
    status: 'Si'
  },
  {
    id: 6,
    photo: require('../img/camera.png'),
    name: 'Cámara',
    description: 'Cámara digital Nikon negra',
    price: '100000$',
    discount: '95000$',
    offerValue: '5%OFF',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../img/mastercard.png'),
    visa: require('../img/visa.png'),
    bancolombia: require('../img/bancolombia.png'),
    status: 'No'
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