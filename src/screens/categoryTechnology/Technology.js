import React from 'react';
import { View, Text, FlatList, Pressable, Image } from 'react-native';
import productStyles from '../../styles/ProductStyles';
import ProductCard from '../../components/ProductCard';


const product = [
  {
    id: 1,
    photo: require('../../img/headphones.png'),
    name: 'Audífonos',
    description: 'Audífonos inalámbricos grises',
    price: '100000$',
    discount: '95000$',
    offerValue: '5%OFF',
    characteristics: 'Marca Sony, Grises, 7 horas de duración, trae cargador',
    master: require('../../img/mastercard.png'),
    visa: require('../../img/visa.png'),
    bancolombia: require('../../img/bancolombia.png')
  },
  {
    id: 2,
    photo: require('../../img/mouse.png'),
    name: 'Mouse',
    description: 'Mouse gamer RedDragon con luces',
    price: '500000$',
    discount: '95000$',
    characteristics: 'Marca RedDragon, Grises, 7 horas de duración, trae cargador',
    master: require('../../img/mastercard.png'),
    visa: require('../../img/visa.png'),
    bancolombia: require('../../img/bancolombia.png')

  },
  {
    id: 3,
    photo: require('../../img/tecno.png'),
    name: 'Celular',
    price: '4500000$',
    description: 'Celular Xiaomi azul brillante',
    discount: '700000$',
    characteristics: 'Marca Xiaomi, Azul, 7 horas de duración, trae cargador',
    master: require('../../img/mastercard.png'),
    visa: require('../../img/visa.png'),
    bancolombia: require('../../img/bancolombia.png')
  },
  {
    id: 4,
    photo: require('../../img/battery.jpg'),
    name: 'Batería',
    description: 'Batería portátil con linterna',
    price: '200000$',
    discount: '130000$',
    offerValue: '35%OFF',
    characteristics: 'Marca Batería, Negra, 7 horas de duración, trae cargador',
    master: require('../../img/mastercard.png'),
    visa: require('../../img/visa.png'),
    bancolombia: require('../../img/bancolombia.png')
  },
  {
    id: 5,
    photo: require('../../img/watch.png'),
    name: 'Reloj',
    description: 'Reloj digital con manillas azules',
    price: '800000$',
    discount: '95000$',
    characteristics: 'Marca Batería, Azul, 7 horas de duración, trae cargador',
    master: require('../../img/mastercard.png'),
    visa: require('../../img/visa.png'),
    bancolombia: require('../../img/bancolombia.png')

  },
  {
    id: 6,
    photo: require('../../img/camera.png'),
    name: 'Cámara',
    description: 'Cámara digital Nikon negra',
    price: '100000$',
    discount: '95000$',
    offerValue: '5%OFF',
    characteristics: 'Marca Nikon, Negra, 7 horas de duración, trae cargador',
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
      <Text style={productStyles.textProduct}>Tecnología</Text>
    </View>
  );
};

const Technology = ({navigation}) => {
  return (
    <View>
      <Menu navigation={navigation}/>
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

export default Technology;
