import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import categoryStyles from '../styles/categoryStyles';

const CategoryCard = ({ category, navigation }) => {
  return (
    <View style={categoryStyles.container}>
      <TouchableOpacity
        style={categoryStyles.touchable}
        onPress={() => navigation.navigate(category.name)}
      >
        <Image style={categoryStyles.image} source={category.photo} />
        <Text style={categoryStyles.title}>{category.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryCard;
