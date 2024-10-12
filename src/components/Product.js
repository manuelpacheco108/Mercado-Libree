import React from 'react';
import { View, FlatList } from 'react-native';
import productStyles from '../styles/productStyles';
import ProductCard from './ProductCard';
import product from '../bd/Products';

const Product = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={product.technology}
        renderItem={({ item }) => <ProductCard product={item} navigation={navigation} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={productStyles.row}
      />

    </View>
  );
}

export default Product;