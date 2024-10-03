import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, Image, Pressable, ScrollView } from 'react-native';
import AppDataContext from '../context/AppDataContext';
import StylesPayment from '../styles/stylePayment';
import MyOwnButton from '../components/MyOwnButton';
import DrawerNavigation from '../components/DrawerNavigation';
import { colors } from '../styles/globalStyles';

const PaymentScreen = ({ navigation }) => {
    const { cart, total, clearCart, addPurchase } = useContext(AppDataContext);
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [selectedBank, setSelectedBank] = useState('');
    const [isPressed, setIsPressed] = useState(false);

    const handlePayment = () => {
        addPurchase();
        clearCart();
        navigation.navigate('HomeDrawer');
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
                            <Text style={StylesPayment.itemDescription}>Precio: ${item.price}</Text>
                        </View>
                    </View>
                ))}
                <Text style={StylesPayment.totalValue}>Valor total: ${total.toFixed(2)}</Text>
                <TextInput
                    style={StylesPayment.input}
                    placeholder="Dirección de entrega"
                    placeholderTextColor={colors.highlight}
                    value={deliveryAddress}
                    onChangeText={(text) => setDeliveryAddress(text.slice(0, 30))}
                    color="black"
                />

                <View style={StylesPayment.paymentMethodContainer}>
                    <Pressable
                        style={[
                            StylesPayment.paymentMethodButton,
                            paymentMethod === 'PSE' && StylesPayment.selectedPaymentMethod,
                        ]}
                        onPress={() => setPaymentMethod('PSE')}
                    >
                        <Text style={StylesPayment.paymentMethodText}>PSE</Text>
                    </Pressable>
                    <Pressable
                        style={[
                            StylesPayment.paymentMethodButton,
                            paymentMethod === 'credit_card' && StylesPayment.selectedPaymentMethod,
                        ]}
                        onPress={() => setPaymentMethod('credit_card')}
                    >
                        <Text style={StylesPayment.paymentMethodText}>Tarjeta de crédito</Text>
                    </Pressable>
                    <Pressable
                        style={[
                            StylesPayment.paymentMethodButton,
                            paymentMethod === 'efecty' && StylesPayment.selectedPaymentMethod,
                        ]}
                        onPress={() => { setPaymentMethod('efecty') }}
                        onPressIn={() => setIsPressed(true)}

                    >
                        <Text style={[StylesPayment.paymentMethodText, isPressed && StylesPayment.selectedPaymentMethod]}>
                            Efecty
                        </Text>
                    </Pressable>
                </View>

                {paymentMethod === 'credit_card' && (
                    <TextInput
                        style={StylesPayment.input}
                        placeholder="Número de tarjeta"
                        placeholderTextColor={colors.highlight}
                        value={cardNumber}
                        onChangeText={(text) => setCardNumber(text.replace(/[^0-9]/g, '').slice(0, 16))}
                        keyboardType="numeric"
                        color="black"
                    />
                )}

                {paymentMethod === 'PSE' && (
                    <TextInput
                        style={StylesPayment.input}
                        placeholder="Seleccionar Banco"
                        placeholderTextColor={colors.highlight}
                        value={selectedBank}
                        onChangeText={(text) => setSelectedBank(text)}
                        color="black"
                    />
                )}

                <MyOwnButton
                    title="Pagar"
                    onPress={handlePayment}
                    disabled={!paymentMethod || total === 0 || !deliveryAddress}
                />
            </View>
        </ScrollView>
    );
};

export default PaymentScreen;
