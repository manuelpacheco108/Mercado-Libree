import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Image, ScrollView } from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { Linking } from 'react-native';
import AppDataContext from '../context/AppDataContext';
import StylesPayment from '../styles/stylePayment';
import MyOwnButton from '../components/MyOwnButton';
import DrawerNavigation from '../components/DrawerNavigation';
import { colors } from '../styles/globalStyles';
import axios from 'axios';

const PaymentScreen = ({ navigation }) => {
    const { cart, total, clearCart, addPurchase } = useContext(AppDataContext);
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [paymentMessage, setPaymentMessage] = useState('');

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
            const response = await axios.post("http://192.168.128.33:3000/create_preference", {
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
                        <Image source={item.photo} style={StylesPayment.thumbnail} />
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
