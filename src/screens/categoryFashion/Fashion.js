import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable, Image, ScrollView, ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import productStyles from '../../styles/productStyles';
import ProductCard from '../../components/ProductCard';

const Menu = ({ navigation }) => (
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

const Fashion = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await firestore()
          .collection('product')
          .where('category', '==', 'fashion')
          .get();

        const productList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        setProducts(productList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products: ", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView>
      <Menu navigation={navigation} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} navigation={navigation} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={productStyles.row}
      />
    </ScrollView>
  );
}

export default Fashion;
