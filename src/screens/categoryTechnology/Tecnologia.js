import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import offerStyles from '../../styles/offersStyles';
import OfferCard from '../../components/OfferCard';

const offers = [
  {
    id: 1,
    photo: require('../../img/headphones.png'),
    name: 'Audífonos',
    description: 'Audífonos inalámbricos grises',
    price: '100000$',
    discount: '95000$',
    offerValue: '5%OFF'
  },
  {
    id: 2,
    photo: require('../../img/headphones.png'),
    name: 'Audífonos',
    description: 'Audífonos inalámbricos grises',
    price: '100000$',
    discount: '95000$',
    offerValue: '5%OFF'
  },
  {
    id: 3,
    photo: require('../../img/headphones.png'),
    name: 'Audífonos',
    description: 'Audífonos inalámbricos grises',
    price: '100000$',
    discount: '95000$',
    offerValue: '5%OFF'
  },
  {
    id: 4,
    photo: require('../../img/headphones.png'),
    name: 'Audífonos',
    description: 'Audífonos inalámbricos grises',
    price: '100000$',
    discount: '95000$',
    offerValue: '5%OFF'
  },
  {
    id: 5,
    photo: require('../../img/headphones.png'),
    name: 'Audífonos',
    description: 'Audífonos inalámbricos grises',
    price: '100000$',
    discount: '95000$',
    offerValue: '5%OFF'
  },
  {
    id: 6,
    photo: require('../../img/headphones.png'),
    name: 'Audífonos',
    description: 'Audífonos inalámbricos grises',
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
          source={require('../../img/back.png')}
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