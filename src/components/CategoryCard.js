import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/categoryStyles';

const CategoryCard = ({ category }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={category.photo} />
            <Text style={styles.title}>{category.name}</Text>
        </View>
    );
};

export default CategoryCard