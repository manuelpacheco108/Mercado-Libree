import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import productStyles from '../../styles/ProductStyles';
import ProductCard from '../../components/ProductCard';

const product = [
  {
    id: 1,
    photo: require('../../img/broom.jpg'),
    name: 'Escoba',
    description: 'Escoba pequeña muy suave',
    price: '100000$',
    discount: '95000$',
    offerValue: '5%OFF'
  },
  {
    id: 2,
    photo: require('../../img/mop.png'),
    name: 'Trapeadora',
    description: 'Trapeadora de defensa personal',

    discount: '95000$',

  },
  {
    id: 3,
    photo: require('../../img/chair.jpg'),
    name: 'Silla',
    description: 'Silla de madera en color negro',
    discount: '700000$',
  },
  {
    id: 4,
    photo: require('../../img/soap.png'),
    name: 'Jabón',
    description: 'Jabón para tocador de menta',
    price: '200000$',
    discount: '130000$',
    offerValue: '35%OFF'
  },
  {
    id: 5,
    photo: require('../../img/cleaner.jpg'),
    name: 'Fabuloso',
    description: 'Jabón limpia pisos con olor a rosas',
    discount: '95000$',
  },
  {
    id: 6,
    photo: require('../../img/cook.png'),
    name: 'Sarten',
    description: 'Juego de sartenes de acero inoxidable',
    price: '100000$',
    discount: '95000$',
    offerValue: '5%OFF'
  }
]
 
const Menu = ({navigation}) => {
  return (
    <View style={productStyles.menuContainer}>
      <TouchableOpacity 
        style={productStyles.menuButton} 
        onPress={() => navigation.navigate('Category')} 
      >
        <Image
          source={require('../../img/back.png')}
          style={productStyles.menuIcon}
        />
      </TouchableOpacity>
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
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={productStyles.row} 
      />

    </View>
  );
}

export default HomeScreen;