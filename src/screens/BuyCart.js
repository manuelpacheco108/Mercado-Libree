import React, { useContext } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import AppDataContext from '../context/AppDataContext';
import MyOwnButton from '../components/MyOwnButton';
import DrawerNavigation from '../components/DrawerNavigation';
import StylesBuyCard from '../styles/styleBuyCard';


const BuyCart = ({ navigation }) => {
    const { cart, total, quantity, removeFromCart, clearCart } = useContext(AppDataContext);

    return (
        <ScrollView style={StylesBuyCard.container}>
            <DrawerNavigation.Menu navigation={navigation} />
            {cart.length > 0 ? (
                <ScrollView style={StylesBuyCard.containerForm}>
                    {cart.map((item, index) => (
                        <View key={index} style={StylesBuyCard.itemContainer}>
                            <Image source={item.photo} style={StylesBuyCard.itemImage} />
                            <View style={StylesBuyCard.itemDetails}>
                                <Text style={StylesBuyCard.itemName}>{item.name}</Text>
                                <Text style={StylesBuyCard.itemDescription}>{item.description}</Text>
                                <Text style={StylesBuyCard.itemPrice}>Precio: ${item.price} COP</Text>
                                <View style={StylesBuyCard.quantityContainer}>
                                    <MyOwnButton
                                        title="-"
                                        onPress={() => quantity(item.id, 'subtract')}
                                    />
                                    <Text style={StylesBuyCard.itemQuantity}>{item.quantity}</Text>
                                    <MyOwnButton
                                        title="+"
                                        onPress={() => quantity(item.id, 'add')}
                                    />
                                </View>
                                <Text style={StylesBuyCard.itemPrice}>
                                    Precio Por Unidad: ${(parseFloat(item.price) * item.quantity).toFixed(2)} COP
                                </Text>
                                <MyOwnButton
                                    title="Quitar del carrito"
                                    style={StylesBuyCard.removeButton}
                                    onPress={() => removeFromCart(item.id)}
                                />
                            </View>
                        </View>
                    ))}
                    <Text style={StylesBuyCard.totalText}>Total: ${total.toFixed(2)} COP</Text>
                    <View style={StylesBuyCard.container}>
                    <MyOwnButton
                        title="Vaciar Carrito"
                        onPress={clearCart}
                        style={StylesBuyCard.clearCartButton}
                    />
                    <MyOwnButton
                        title="Proceder al Pago"
                        onPress={() => navigation.navigate('PaymentScreen')}
                        style={StylesBuyCard.checkoutButton}
                    />
                    </View>
                </ScrollView>
            ) : (
                <Text style={StylesBuyCard.emptyCartText}> El carrito está vacío 🚑 </Text>
            )}
        </ScrollView>
    );
};

export default BuyCart;