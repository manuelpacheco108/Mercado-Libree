import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, Image, ScrollView } from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { Linking } from 'react-native';
import AppDataContext from '../context/AppDataContext';
import StylesPayment from '../styles/stylePayment';
import MyOwnButton from '../components/MyOwnButton';
import DrawerNavigation from '../components/DrawerNavigation';
import { colors } from '../styles/globalStyles';
import axios from 'axios';
import firestore from '@react-native-firebase/firestore';

const PaymentScreen = ({ navigation }) => {
    const { total, clearCart, addPurchase } = useContext(AppDataContext);
    const [cart, setCart] = useState([]);
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [paymentMessage, setPaymentMessage] = useState('');

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const cartItems = [];
                const snapshot = await firestore().collection('cart').get();
                snapshot.forEach(doc => {
                    cartItems.push({ id: doc.id, ...doc.data() });
                });
                setCart(cartItems);
            } catch (error) {
                console.error("Error obteniendo el carrito desde Firestore:", error);
            }
        };

        fetchCartItems();
    }, []);

    const openUrl = async (url) => {
        if (await InAppBrowser.isAvailable()) {
            InAppBrowser.open(url, {
                showTitle: true,
                toolbarColor: '#6200EE',
                enableUrlBarHiding: true,
                enableDefaultShare: true,
                forceCloseOnRedirection: false,
                animations: {
                    startEnter: 'slide_in_right',
                    startExit: 'slide_out_left',
                    endEnter: 'slide_in_left',
                    endExit: 'slide_out_right',
                },
            });
        } else {
            Linking.openURL(url);
        }
    };

    const createPayment = async () => {
        try {
            const response = await axios.post("https://api-qogssigufq-uc.a.run.app/create_preference", {
                items: cart.map(item => ({
                    title: item.name,
                    quantity: Number(item.quantity),
                    unit_price: Number(item.price),
                    currency_id: "COP"
                }))
            });
            const preferenceUrl = response.data.init_point;
            openUrl(preferenceUrl);
            addPurchase();
            
            // Guardar en Firestore en la colección `shopping`
            await firestore().collection('shopping').add({
                items: cart,
                total: total,
                deliveryAddress: deliveryAddress,
                createdAt: firestore.FieldValue.serverTimestamp(),
            });

            // Mensaje de éxito y limpiar carrito
            setTimeout(() => {
                setPaymentMessage('Pago realizado con éxito 💰');
                clearCart();
                navigation.navigate('HomeDrawer');
                setPaymentMessage('');
            }, 2500);
        } catch (error) {
            console.log("Error en la creación del pago:", error);
        }
    };

    return (
        <ScrollView style={StylesPayment.container}>
            <DrawerNavigation.Menu navigation={navigation} />
            <View style={StylesPayment.containerForm}>
                <Text style={StylesPayment.headerText}>Sucursal de Pago</Text>
                {cart.map((item) => (
                    <View key={item.id} style={StylesPayment.itemContainer}>
                        <Image source={{ uri: item.photo }} style={StylesPayment.thumbnail} />
                        <View style={StylesPayment.itemDetails}>
                            <Text style={StylesPayment.itemName}>{item.name}</Text>
                            <Text style={StylesPayment.itemDescription}>{item.description}</Text>
                            <Text style={StylesPayment.itemDescription}>Cantidad: {item.quantity}</Text>
                            <Text style={StylesPayment.itemDescription}>Precio: ${item.price} COP</Text>
                        </View>
                    </View>
                ))}
                <Text style={StylesPayment.totalValue}>Valor total: ${total.toFixed(2)} COP</Text>
                <TextInput
                    style={StylesPayment.input}
                    placeholder="Dirección de entrega"
                    placeholderTextColor={colors.highlight}
                    value={deliveryAddress}
                    onChangeText={(text) => setDeliveryAddress(text.slice(0, 30))}
                    color="black"
                />
                {paymentMessage ? (
                    <Text style={StylesPayment.paymentMessage}>{paymentMessage}</Text>
                ) : (
                    <MyOwnButton
                        title="Pagar"
                        onPress={createPayment}
                        disabled={!total || !deliveryAddress}
                    />
                )}
            </View>
        </ScrollView>
    );
};

export default PaymentScreen;
