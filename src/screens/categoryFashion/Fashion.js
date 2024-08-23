import React from 'react';
import { View, Text, FlatList, Pressable, Image } from 'react-native';
import productStyles from '../../styles/ProductStyles';
import ProductCard from '../../components/ProductCard';

const product = [
  {
    id: 1,
    photo: require('../../img/tshirt.png'),
    name: 'Camisa',
    description: 'Camisa de spider-man muy masculina',
    price: '100000$',
    discount: '95000$',
    offerValue: '5%OFF'
  },
  {
    id: 2,
    photo: require('../../img/pant.jpg'),
    name: 'Pantalón',
    description: 'Pantalones oscuros para trabajar',

    discount: '95000$',

  },
  {
    id: 3,
    photo: require('../../img/shoes.png'),
    name: 'Zapatos',
    description: 'Tenis Jordan 4 azul con blanco',
    discount: '700000$',
  },
  {
    id: 4,
    photo: require('../../img/jacket.png'),
    name: 'Chaqueta',
    description: 'Chaqueta impermeable de color verde',
    price: '200000$',
    discount: '130000$',
    offerValue: '35%OFF'
  },
  {
    id: 5,
    photo: require('../../img/hoddie.png'),
    name: 'Saco',
    description: 'Saco medio formal color verde',
    discount: '95000$',
  },
  {
    id: 6,
    photo: require('../../img/littlePant.jpg'),
    name: 'Pantaloneta',
    description: 'Pantalonea pequeña de color amarillo con negro',
    price: '100000$',
    discount: '95000$',
    offerValue: '5%OFF'
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
      <Text style={productStyles.textProduct}>Moda</Text>
    </View>
  );
};

const Fashion = ({navigation}) => {
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

export default Fashion;