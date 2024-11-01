import React from 'react';
import { View, Text, Image, TextInput, Pressable } from 'react-native';
import productStyles from '../styles/productStyles';
import profileStyles from '../styles/profileStyles';
import suportStyle from '../styles/suportStyle';

const DetailCard = ({ product }) => {
    return (
        <View style={productStyles.container}>
            <Image style={productStyles.image} source={{ uri: product.photo }} />
            <Text style={productStyles.title}>{product.name}</Text>
            <Text style={productStyles.text}>{product.description}</Text>
            <Text style={productStyles.textPrice}>{product.price}</Text>
            <Text style={productStyles.offerPrice}>
                {product.discount}
                <Text style={productStyles.offerValue}>{product.offerValue}</Text>
            </Text>
            <Text style={productStyles.text}>{product.characteristics}</Text>
            <Text style={profileStyles.titlePrivacy}>Medios de Pago</Text>
            <View style={profileStyles.buy}>
                <Image style={profileStyles.payCard} source={require('../img/mastercard.png')} />
                <Image style={profileStyles.payCard} source={require('../img/visa.png')} />
                <Image style={profileStyles.payCard} source={require('../img/bancolombia.png')} />
            </View>
            <View style={suportStyle.infoSupport}>
                <View style={suportStyle.card}>
                    <Text style={suportStyle.listItemText}>Preguntas</Text>
                    <Text style={suportStyle.listItemTextInfo}>Aquí podrás hacer alguna pregunta</Text>
                    <TextInput
                        style={suportStyle.inputSupport}
                        placeholder="Pregunta"
                        maxLength={100}
                    />
                    <Pressable style={suportStyle.sendButton}>
                        <Text style={suportStyle.sendButtonText}>Enviar</Text>
                    </Pressable>
                </View>
            </View>
            <View style={suportStyle.infoSupport}>
                <View style={suportStyle.card}>
                    <Text style={suportStyle.listItemText}>Comentarios</Text>
                    <Text style={suportStyle.listItemTextInfo}>Aquí podrás dejar algún comentario</Text>
                    <TextInput
                        style={suportStyle.inputSupport}
                        placeholder="Comentario"
                        maxLength={200}
                    />
                    <Pressable style={suportStyle.sendButton}>
                        <Text style={suportStyle.sendButtonText}>Enviar</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default DetailCard;
