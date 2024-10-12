import React from 'react';
import { View, Text, FlatList, Pressable, Image, ScrollView } from 'react-native';
import productStyles from '../../styles/productStyles';
import ProductCard from '../../components/ProductCard';
import product from '../../bd/Products';

const Menu = ({ navigation }) => {
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
      <Text style={productStyles.textProduct}>Moda</Text>
    </View>
  );
};

const Fashion = ({ navigation }) => {
  return (
    <ScrollView>
      <Menu navigation={navigation} />
      <FlatList
        data={product.fashion}
        renderItem={({ item }) => <ProductCard product={item} navigation={navigation} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={productStyles.row}
      />

    </ScrollView>
  );
}

export default Fashion;