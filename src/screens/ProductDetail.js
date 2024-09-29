import React, { useContext, useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import MyOwnButton from '../components/MyOwnButton'
import productStyles from '../styles/ProductStyles';
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
    const { addToCart } = useContext(AppDataContext);

    const Star = ({ filled }) => {
        let color;
        if (filled) {
            color = '#FFD700';
        } else {
            color = '#black';
        }
        return <Text style={{ fontSize: 30, color: color }}>★</Text>;
    };

    const handleRating = (value) => {
        setRating(value);
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
                    <Text style={productStyles.textPrice}>{product.price}</Text>
                    <Text style={productStyles.offerPrice}>{product.discount} <Text style={productStyles.offerValue}>{product.offerValue}</Text></Text>
                    <Text style={productStyles.text}>{product.characteristics}</Text>
                    <Text style={profileStyles.titlePrivacy}>Medios de Pago</Text>

                    <View style={profileStyles.buy}>
                        <Image style={profileStyles.payCard} source={product.master} />
                        <Image style={profileStyles.payCard} source={product.visa} />
                        <Image style={profileStyles.payCard} source={product.bancolombia} />
                    </View>
                </Card>
            </View>
            <View style={suportStyle.viewContainerButton}>
            <MyOwnButton 
                title="Agregar al carrito" 
                onPress={()=> addToCart({...product,quantity:1})}/>
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