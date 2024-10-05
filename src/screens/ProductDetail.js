import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, Pressable, Alert } from 'react-native';
import MyOwnButton from '../components/MyOwnButton';
import productStyles from '../styles/productStyles';
import profileStyles from '../styles/profileStyles';
import suportStyle from '../styles/suportStyle';
import { Card, TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import AppDataContext from '../context/AppDataContext';

const Menu = ({ navigation }) => {
    return (
        <View style={productStyles.menuContainer}>
            <Pressable
                style={productStyles.menuButton}
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Image
                    source={require('../img/back.png')}
                    style={productStyles.menuIcon}
                />
            </Pressable>
            <Text style={productStyles.textProduct}>Volver</Text>
        </View>
    );
};

const ProductDetail = ({ route, navigation }) => {
    const { product } = route.params;
    const [rating, setRating] = useState(0);
    const { addToCart, addToFavorites } = useContext(AppDataContext);
    const [message, setMessage] = useState('');
    const [quantityAdded, setQuantityAdded] = useState(0);

    useEffect(() => {
        if (quantityAdded > 0) {
            setMessage(`Agregaste ${quantityAdded} producto(s) al carrito`);
            const timer = setTimeout(() => {
                setMessage('');
                setQuantityAdded(0);
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, [quantityAdded]);

    const Star = ({ filled }) => {
        let color = filled ? '#FFD700' : 'black';
        return <Text style={{ fontSize: 30, color }}>★</Text>;
    };

    const handleRating = (value) => {
        setRating(value);
    };

    const handleAddToCart = () => {
        const quantity = 1;
        addToCart({ ...product, quantity });
        setQuantityAdded(quantity);
    };

    const handleAddToFavorites = () => {
        addToFavorites(product);
        Alert.alert('Éxito', 'Producto agregado a favoritos');
    };

    return (
        <ScrollView>
            <View>
                <Menu navigation={navigation} />
            </View>
            <View style={suportStyle.infoSupport}>
                <Card style={suportStyle.card}>
                    <Text style={productStyles.titleProduct}>Detalles del Producto</Text>
                    <Image style={productStyles.image} source={product.photo} />
                    <Text style={productStyles.title}>{product.name}</Text>
                    <Text style={productStyles.text}>{product.description}</Text>
                    <Text style={productStyles.textPrice}>${product.price} COP</Text>
                    <Text style={productStyles.offerPrice}>${product.discount} COP
                        <Text style={productStyles.offerValue}>{product.offerValue}</Text>
                    </Text>
                    <Text style={productStyles.text}>{product.characteristics}</Text>
                    <Text style={profileStyles.titlePrivacy}>Medios de Pago</Text>

                    <View style={profileStyles.buy}>
                        <Image style={profileStyles.payCard} source={product.master} />
                        <Image style={profileStyles.payCard} source={product.visa} />
                        <Image style={profileStyles.payCard} source={product.bancolombia} />
                    </View>
                </Card>
            </View>

            {message ? <Text style={productStyles.confirmationMessage}>{message}</Text> : null}

            <View style={suportStyle.viewContainerButton}>
                <MyOwnButton
                    title="Agregar al carrito"
                    onPress={handleAddToCart}
                />
                <MyOwnButton
                    title="Agregar a Favoritos"
                    onPress={handleAddToFavorites}
                />
            </View>

            <View style={suportStyle.infoSupport}>
                <Card style={suportStyle.card}>
                    <Text style={suportStyle.listItemText}>Preguntas</Text>
                    <Text style={suportStyle.listItemTextInfo}>Aquí podrás hacer alguna pregunta</Text>
                    <TextInput
                        style={suportStyle.inputSupport}
                        label='Pregunta'
                        mode='outlined'
                        activeOutlineColor='#146C94'
                        maxLength={100}
                    />
                    <Pressable style={suportStyle.sendButton}>
                        <Text style={suportStyle.sendButtonText}>Enviar</Text>
                    </Pressable>
                </Card>
            </View>
            <View style={suportStyle.infoSupport}>
                <Card style={suportStyle.card}>
                    <Text style={productStyles.ratingTitle}>Califica Este Producto</Text>
                    <View style={productStyles.starsContainer}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Pressable key={star} onPress={() => handleRating(star)}>
                                <Star filled={star <= rating} />
                            </Pressable>
                        ))}
                    </View>
                    <Text style={suportStyle.listItemText}>Comentarios</Text>
                    <Text style={suportStyle.listItemTextInfo}>Aquí podrás dejar algún comentario</Text>
                    <TextInput
                        style={suportStyle.inputSupport}
                        label='Comentario'
                        mode='outlined'
                        activeOutlineColor='#146C94'
                        maxLength={200}
                    />
                    <Pressable style={suportStyle.sendButton}>
                        <Text style={suportStyle.sendButtonText}>Enviar</Text>
                    </Pressable>
                </Card>
            </View>
        </ScrollView>
    );
};

export default ProductDetail;
