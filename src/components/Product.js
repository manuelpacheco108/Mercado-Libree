import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore'; // Asegúrate de importar firestore
import productStyles from '../styles/productStyles';
import ProductCard from './ProductCard';

const Product = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  // Obtener productos desde Firestore
  useEffect(() => {
    const productRef = firestore().collection('product'); // Cambia 'products' al nombre de tu colección
    const unsubscribe = productRef.onSnapshot(
      (snapshot) => {
        const productData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productData);
      },
      (error) => {
        console.error("Error fetching products: ", error);
      }
    );

    return () => unsubscribe(); // Limpieza del listener al desmontar
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
