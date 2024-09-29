import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import AppDataContext from '../context/AppDataContext';
import MyOwnButton from '../components/MyOwnButton';
import StylesBuyCard from '../styles/styleBuyCard';

const BuyCart = ({ navigation }) => {
    const { cart, total } = useContext(AppDataContext);
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        if (cart.length > 0) {
            
            setItems(cart.map(item => ({
                ...item,
                totalPrice: item.price * item.quantity
            })));
        } else {
            setItems([]);
        }
    }, [cart]);

    return (
        <View>
            {items.length > 0 ? (
                items.map((item, index) => (
                    <View key={index}>
                        <Image source={item.photo} style={StylesBuyCard.itemImage}/>
                        <Text>{item.name}</Text>
                        <Text>{item.description}</Text>
                        <Text>Precio: {item.price}</Text>
                        <Text>Cantidad: {item.quantity}</Text>
                        <Text>Precio Total: {item.totalPrice}</Text>
                    </View>
                ))
            ) : (
                <Text>El carrito está vacío</Text>
            )}
            <Text>Total: {total}</Text>
            <MyOwnButton title="Proceder al Pago" onPress={() => navigation.navigate('PaymentScreen')} />
        </View>
    );
};

export default BuyCart;
