import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import categoryStyles from '../styles/categoryStyles';
import { Card } from 'react-native-paper';

const CategoryCard = ({ category, navigation }) => {

  return (
    <View style={categoryStyles.container}>

      <Pressable
        style={categoryStyles.touchable}
        onPress={() => navigation.navigate(category.category)}
      >
        <Card style={categoryStyles.card}>
          <Image style={categoryStyles.image} source={category.photo} />
          <Text style={categoryStyles.title}>{category.name}</Text>
        </Card>
      </Pressable>
    </View>
  );
};

export default CategoryCard;
