import React, { useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import StylesBuyCard from '../styles/styleBuyCard'
import { colors } from '../styles/globalStyles';
import DrawerNavigation from '../components/DrawerNavigation';
import MyOwnButton from '../components/MyOwnButton'


const BuyCart = ({ navigation }) => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            photo: require('../img/tshirt.png'),
            name: 'Camisa',
            description: 'Camisa de spider-man muy masculina',
            price: 95000,
            quantity: 1
        },
        {
            id: 3,
            photo: require('../img/shoes.png'),
            name: 'Zapatos',
            description: 'Tenis Jordan 4 azul con blanco',
            price: 700000,
            quantity: 1
        },
    ]);
    const updateQuantity = (id, amount) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + amount) }
                    : item
            )
        );
    };
    const calculateTotal = () => {
        return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    const renderItem = ({ item }) => (
        <View style={StylesBuyCard.itemContainer}>
            <Image source={item.photo} style={StylesBuyCard.itemImage} />
            <View style={StylesBuyCard.itemDetails}>
                <Text style={StylesBuyCard.itemName}>{item.name}</Text>
                <Text style={StylesBuyCard.itemDescription}>{item.description}</Text>
                <Text style={StylesBuyCard.itemPrice}>${item.price}</Text>
                <View style={StylesBuyCard.quantityContainer}>
                    <MyOwnButton title="-" onPress={() => updateQuantity(item.id, -1)} />
                    <Text style={StylesBuyCard.itemQuantity}>{item.quantity}</Text>
                    <MyOwnButton title="+" onPress={() => updateQuantity(item.id, 1)} />
                </View>
            </View>
        </View>
    );
    return (
        <View style={StylesBuyCard.container}>
             <DrawerNavigation.Menu navigation={navigation} />
             <View style={StylesBuyCard.containerForm}>
            <FlatList
                data={cartItems}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
            <View style={StylesBuyCard.totalContainer}>
                <Text style={StylesBuyCard.totalText}>Total: ${calculateTotal()}</Text>
            </View>
            <MyOwnButton
                title="Proceder al Pago"
                onPress={() => navigation.navigate('PaymentScreen', {cartItems:cartItems})}
                color={colors.highlight}
            />
            </View>
        </View>
        
    );
};

export default BuyCart;
