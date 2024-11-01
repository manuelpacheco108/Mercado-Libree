import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Pressable } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import offerStyles from '../styles/offersStyles';
import OfferCard from '../components/OfferCard';

const Menu = ({ navigation }) => {
  return (
    <View style={offerStyles.menuContainer}>
      <Pressable
        style={offerStyles.menuButton}
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'HomeDrawer' }],
          });
        }}
      >
        <Image
          source={require('../img/back.png')}
          style={offerStyles.menuIcon}
        />
      </Pressable>
      <Text style={offerStyles.textOffers}>Ofertas</Text>
    </View>
  );
};

const Offer = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snapshot = await firestore().collection('product').get();
        const productsData = snapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .filter(product => product.offerValue); 

        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products: ', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <View>
      <Menu navigation={navigation} />
      <FlatList
        data={products}
        renderItem={({ item }) => <OfferCard product={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={offerStyles.row}
      />
    </View>
  );
};

export default Offer;
