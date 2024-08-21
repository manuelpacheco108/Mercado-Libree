import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import offerStyles from '../styles/offersStyles';
import OfferCard from '../components/OfferCard';

const offers = [
  {
    id: 1,
    photo: require('../img/headphones.png'),
    name: 'Audífonos',
    description: 'Audífonos inalámbricos grises',
    price: '100000$',
    discount: '95000$', 
    offerValue: '5%OFF'
  },
  {
    id: 2,
    photo: require('../img/shoes.png'),
    name: 'Tenis',
    description: 'Tenis Jordan 4 blanco y azul',
    price: '800000$',
    discount: '640000$',
    offerValue: '20%OFF'
  },
  {
    id: 3,
    photo: require('../img/case.png'),
    name: 'Funda',
    description: 'Funda para Iphone 12 de naturaleza',
    price: '130000$',
    discount: '91000$',
    offerValue: '30%OFF'
  },
  {
    id: 4,
    photo: require('../img/battery.jpg'),
    name: 'Bateria',
    description: 'Batería portátil con linterna',
    price: '200000$',
    discount: '130000$',
    offerValue: '35%OFF'
  },
  {
    id: 5,
    photo: require('../img/mattress.png'),
    name: 'Colchón',
    description: 'Colchón titanium de Comodisimos',
    price: '1300000$',
    discount: '520000$',
    offerValue: '60%OFF'
  },
  {
    id: 6,
    photo: require('../img/sun.png'),
    name: 'Lentes',
    description: 'Lentes de sol negros para ejercicio',
    price: '100000$',
    discount: '95000$',
    offerValue: '5%OFF'
  }
]
 
const Menu = ({navigation}) => {
  return (
    <View style={offerStyles.menuContainer}>
      <TouchableOpacity 
        style={offerStyles.menuButton} 
        onPress={() => navigation.navigate('Home')}
      >
        <Image
          source={require('../img/back.png')}
          style={offerStyles.menuIcon}
        />
      </TouchableOpacity>
      <Text style={offerStyles.textOffers}>Ofertas</Text>
    </View>
  );
};

const Offer = ({navigation}) => {
  return (
    <View>
      <Menu navigation={navigation}/>
      <FlatList
        data={offers}
        renderItem={({ item }) => <OfferCard offer={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={offerStyles.row} 
      />

    </View>
  );
}

export default Offer;