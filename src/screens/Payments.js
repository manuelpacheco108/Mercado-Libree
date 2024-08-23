import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, Pressable } from 'react-native';
import StylesPayment from '../styles/stylePayment';
import MyOwnButton from '../components/MyOwnButton';
import DrawerNavigation from '../components/DrawerNavigation';

const PaymentScreen = () => {
  const cartItems = [
    {
      id: 1,
      photo: require('../img/icon_user.png'),
      name: 'Camisa',
      description: 'Camisa de spider-man muy masculina',
      price: 95000,
      quantity: 1,
    },
    {
      id: 3,
      photo: require('../img/icon_user.png'),
      name: 'Zapatos',
      description: 'Tenis Jordan 4 azul con blanco',
      price: 700000,
      quantity: 1,
    },
  ];

  const [items, setItems] = useState(cartItems);
  const [totalValue, setTotalValue] = useState(0);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [selectedBank, setSelectedBank] = useState('');

  useEffect(() => {
    calculateTotalValue(items);
  }, [items]);

  const handleValueChange = (text, id) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        item.price = text.replace(/[^0-9]/g, '').slice(0, 8);
      }
      return item;
    });
    setItems(updatedItems);
    calculateTotalValue(updatedItems);
  };

  const handleQuantityChange = (text, id) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        item.quantity = text.replace(/[^0-9]/g, '').slice(0, 2);
      }
      return item;
    });
    setItems(updatedItems);
    calculateTotalValue(updatedItems);
  };

  const calculateTotalValue = (items) => {
    let total = 0;
    items.forEach(item => {
      const price = parseInt(item.price) || 0;
      const quantity = parseInt(item.quantity) || 0;
      total += price * quantity;
    });
    setTotalValue(total);
  };

  const handlePayment = () => {
    alert('Pago realizado con éxito');
  };

  return (
    <View style={StylesPayment.container}>
      <DrawerNavigation/>
      <Text style={StylesPayment.headerText}>Sucursal de Pago</Text>
      {items.map((item) => (
        <View key={item.id} style={StylesPayment.itemContainer}>
          <Image source={item.photo} style={StylesPayment.thumbnail} />
          <View style={StylesPayment.itemDetails}>
            <Text style={StylesPayment.itemName}>{item.name}</Text>
            <Text style={StylesPayment.itemDescription}>{item.description}</Text>
            <TextInput
              style={StylesPayment.input}
              placeholder="Valor"
              value={item.price.toString()}
              onChangeText={(text) => handleValueChange(text, item.id)}
              keyboardType="numeric"
            />
            <TextInput
              style={StylesPayment.input}
              placeholder="Cantidad"
              value={item.quantity.toString()}
              onChangeText={(text) => handleQuantityChange(text, item.id)}
              keyboardType="numeric"
            />
          </View>
        </View>
      ))}
      <Text style={StylesPayment.totalValue}>Valor total: {totalValue}</Text>
      <TextInput
        style={StylesPayment.input}
        placeholder="Dirección de entrega"
        value={deliveryAddress}
        onChangeText={(text) => setDeliveryAddress(text.slice(0, 30))}
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
          onPress={() => setPaymentMethod('efecty')}
        >
          <Text style={StylesPayment.paymentMethodText}>Efecty</Text>
        </Pressable>
      </View>

      {paymentMethod === 'credit_card' && (
        <TextInput
          style={StylesPayment.input}
          placeholder="Número de tarjeta"
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text.replace(/[^0-9]/g, '').slice(0, 16))}
          keyboardType="numeric"
        />
      )}

      {paymentMethod === 'PSE' && (
        <TextInput
          style={StylesPayment.input}
          placeholder="Seleccionar Banco"
          value={selectedBank}
          onChangeText={(text) => setSelectedBank(text)}
        />
      )}

      <MyOwnButton
        title="Pagar"
        onPress={handlePayment}
        disabled={!paymentMethod || totalValue === 0 || !deliveryAddress}
      />
    </View>
  );
};

export default PaymentScreen;
