import React from 'react';
import { View, Text, FlatList, Pressable, Image, ScrollView } from 'react-native';
import productStyles from '../../styles/productStyles';
import ProductCard from '../../components/ProductCard';

const product = [
  {
    id: 13,
    photo: require('../../img/pencil.png'),
    name: 'Lapiz',
    description: 'Lapiz maquillador',
    price: '100000',
    discount: '95000',
    offerValue: '5%OFF',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../../img/mastercard.png'),
    visa: require('../../img/visa.png'),
    bancolombia: require('../../img/bancolombia.png')
  },
  {
    id: 14,
    photo: require('../../img/soapFace.png'),
    name: 'Jabón',
    description: 'Jabón dermatologico para el rostro',
    price: '540000',
    discount: '95000',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../../img/mastercard.png'),
    visa: require('../../img/visa.png'),
    bancolombia: require('../../img/bancolombia.png')

  },
  {
    id: 15,
    photo: require('../../img/pen.png'),
    name: 'Labial',
    description: 'Labial rojo con acabado mate',
    price: '500000',
    discount: '700000',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../../img/mastercard.png'),
    visa: require('../../img/visa.png'),
    bancolombia: require('../../img/bancolombia.png')
  },
  {
    id: 16,
    photo: require('../../img/sunFactor.png'),
    name: 'Bloqueador',
    description: 'Bloqueador solar de 1000ml',
    price: '200000',
    discount: '130000',
    offerValue: '35%OFF',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../../img/mastercard.png'),
    visa: require('../../img/visa.png'),
    bancolombia: require('../../img/bancolombia.png')
  },
  {
    id: 17,
    photo: require('../../img/compact.png'),
    name: 'Polvo',
    description: 'Polvo compacto con espejo',
    price: '100000',
    discount: '95000',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../../img/mastercard.png'),
    visa: require('../../img/visa.png'),
    bancolombia: require('../../img/bancolombia.png')
  },
  {
    id: 18,
    photo: require('../../img/face.png'),
    name: 'Mascarilla',
    description: 'Mascarilla de aguacate para la cara',
    price: '100000',
    discount: '95000',
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
      <Text style={productStyles.textProduct}>Belleza</Text>
    </View>
  );
};

const Makeup = ({navigation}) => {
  return (
    <ScrollView>
      <Menu navigation={navigation}/>
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

export default Makeup;