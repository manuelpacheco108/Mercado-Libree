import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import productStyles from '../styles/productStyles';
import ProductCard from './ProductCard';

const Product = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productRef = firestore().collection('product');
    const unsubscribe = productRef.onSnapshot(
      (snapshot) => {
        const productData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productData);
      },
      (error) => {
        console.error("Error fetching products: ", error);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} navigation={navigation} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={productStyles.row}
      />
    </View>
  );
};

export default Product;
