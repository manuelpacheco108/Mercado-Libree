import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import productStyles from '../../styles/ProductStyles';
import ProductCard from '../../components/ProductCard';

const product = [
  {
    id: 1,
    photo: require('../../img/beltPet.png'),
    name: 'Correa',
    description: 'Correa dinamica para mascotas',
    price: '100000$',
    discount: '95000$',
    offerValue: '5%OFF'
  },
  {
    id: 2,
    photo: require('../../img/ball.png'),
    name: 'Pelota',
    description: 'Pelota saltarina para mascotas',

    discount: '95000$',

  },
  {
    id: 3,
    photo: require('../../img/drink.png'),
    name: 'Bebedero',
    description: 'Bebedero para mascotas inoxidable',
    discount: '700000$',
  },
  {
    id: 4,
    photo: require('../../img/eat.jpg'),
    name: 'Comedero',
    description: 'Comedero para mascotas de varios colores',
    price: '200000$',
    discount: '130000$',
    offerValue: '35%OFF'
  },
  {
    id: 5,
    photo: require('../../img/shirt.png'),
    name: 'Camisa',
    description: 'Camisa comodas para mascotas',
    discount: '95000$',
  },
  {
    id: 6,
    photo: require('../../img/bone.png'),
    name: 'Hueso',
    description: 'Hueso para mascotas comestible',
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
      <Text style={productStyles.textProduct}>Mascotas</Text>
    </View>
  );
};

const Pet = ({navigation}) => {
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

export default Pet;