import React from 'react';
import { View, Text, Image } from 'react-native';
import productStyles from '../styles/ProductStyles';
import profileStyles from '../styles/profileStyles';
import suportStyle from '../styles/suportStyle';


const DetailCard = ({ product }) => {

    return (
        <View style={productStyles.container}>
            <Image style={productStyles.image} source={product.photo} />
            <Text style={productStyles.title}>{product.name}</Text>
            <Text style={productStyles.text}>{product.description}</Text>
            <Text style={productStyles.textPrice}>{product.price}</Text>
            <Text style={productStyles.offerPrice}>{product.discount} <Text style={productStyles.offerValue}>{product.offerValue}</Text></Text>
            <Text style={productStyles.text}>{product.characteristics}</Text>
            <Text style={profileStyles.titlePrivacy}>Medios de Pago</Text>
            <View style={profileStyles.buy}>
                <Image style={profileStyles.payCard} source={profile.master} />
                <Image style={profileStyles.payCard} source={profile.visa} />
                <Image style={profileStyles.payCard} source={profile.bancolombia} />
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
        </View>
    );
};

export default DetailCard