import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import productStyles from '../../styles/ProductStyles';
import ProductCard from '../../components/ProductCard';

const product = [
  {
    id: 1,
    photo: require('../../img/pencil.png'),
    name: 'Lapiz',
    description: 'Lapiz maquillador',
    price: '100000$',
    discount: '95000$',
    offerValue: '5%OFF'
  },
  {
    id: 2,
    photo: require('../../img/soapFace.png'),
    name: 'Jabón',
    description: 'Jabón dermatologico para el rostro',

    discount: '95000$',

  },
  {
    id: 3,
    photo: require('../../img/pen.png'),
    name: 'Labial',
    description: 'Labial rojo con acabado mate',
    discount: '700000$',
  },
  {
    id: 4,
    photo: require('../../img/sunFactor.png'),
    name: 'Bloqueador',
    description: 'Bloqueador solar de 1000ml',
    price: '200000$',
    discount: '130000$',
    offerValue: '35%OFF'
  },
  {
    id: 5,
    photo: require('../../img/compact.png'),
    name: 'Polvo',
    description: 'Polvo compacto con espejo',
    discount: '95000$',
  },
  {
    id: 6,
    photo: require('../../img/face.png'),
    name: 'Mascarilla',
    description: 'Mascarilla de aguacate para la cara',
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
      <Text style={productStyles.textProduct}>Belleza</Text>
    </View>
  );
};

const Makeup = ({navigation}) => {
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

export default Makeup;