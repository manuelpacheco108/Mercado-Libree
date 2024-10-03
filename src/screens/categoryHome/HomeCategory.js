import React from 'react';
import { View, Text, FlatList, Pressable, Image } from 'react-native';
import productStyles from '../../styles/ProductStyles';
import ProductCard from '../../components/ProductCard';

const product = [
  {
    id: 7,
    photo: require('../../img/broom.jpg'),
    name: 'Escoba',
    description: 'Escoba pequeña muy suave',
    price: '100000$',
    discount: '95000$',
    offerValue: '5%OFF',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../../img/mastercard.png'),
    visa: require('../../img/visa.png'),
    bancolombia: require('../../img/bancolombia.png')
  },
  {
    id: 8,
    photo: require('../../img/mop.png'),
    name: 'Trapeadora',
    description: 'Trapeadora de defensa personal',
    price: '700000$',
    discount: '95000$',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../../img/mastercard.png'),
    visa: require('../../img/visa.png'),
    bancolombia: require('../../img/bancolombia.png')

  },
  {
    id: 9,
    photo: require('../../img/chair.jpg'),
    name: 'Silla',
    description: 'Silla de madera en color negro',
    price: '4700000$',
    discount: '700000$',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../../img/mastercard.png'),
    visa: require('../../img/visa.png'),
    bancolombia: require('../../img/bancolombia.png')
  },
  {
    id: 10,
    photo: require('../../img/soap.png'),
    name: 'Jabón',
    description: 'Jabón para tocador de menta',
    price: '200000$',
    discount: '130000$',
    offerValue: '35%OFF',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../../img/mastercard.png'),
    visa: require('../../img/visa.png'),
    bancolombia: require('../../img/bancolombia.png')
  },
  {
    id: 11,
    photo: require('../../img/cleaner.jpg'),
    name: 'Fabuloso',
    description: 'Jabón limpia pisos con olor a rosas',
    price: '100000$',
    discount: '95000$',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../../img/mastercard.png'),
    visa: require('../../img/visa.png'),
    bancolombia: require('../../img/bancolombia.png')
  },
  {
    id: 12,
    photo: require('../../img/cook.png'),
    name: 'Sarten',
    description: 'Juego de sartenes de acero inoxidable',
    price: '100000$',
    discount: '95000$',
    offerValue: '5%OFF',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../../img/mastercard.png'),
    visa: require('../../img/visa.png'),
    bancolombia: require('../../img/bancolombia.png')
  }
]
 
const Menu = ({navigation}) => {
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
      <Text style={productStyles.textProduct}>Hogar</Text>
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Menu navigation={navigation}/>
      <FlatList
        data={product}
        renderItem={({ item }) => <ProductCard product={item} navigation={navigation}/>}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={productStyles.row} 
      />

    </View>
  );
}

export default HomeScreen;