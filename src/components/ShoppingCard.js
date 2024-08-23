import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/shoppingStyles';
import { Card } from 'react-native-paper';

const ShoppingCard = ({ shopping }) => {
    return (
        <View style={styles.shoppingContainer}>
            <Image style={styles.image} source={shopping.photo} />
            <Card style={styles.textContainer}>
                <Text style={styles.title}>{shopping.name}</Text>
                <Text style={styles.description}>{shopping.description}</Text>
                <Text style={styles.description}>Valor: {shopping.price}</Text>
                <Text style={styles.status}>Estado: {shopping.status} </Text>

            </Card>
        </View>
    );
};

export default ShoppingCard;
