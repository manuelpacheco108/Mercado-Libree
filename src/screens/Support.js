import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import suportStyle from '../styles/suportStyle';



const Menu = () => {
    return (
        <View style={suportStyle.menuContainer}>
            <TouchableOpacity style={suportStyle.menuButton} onPress={() => console.log('Menu clicked')}>
                <Image
                    source={require('../img/back.png')}
                    style={suportStyle.menuIcon}
                />
            </TouchableOpacity>
            <Text style={suportStyle.textSupport}>Ayuda</Text>
        </View>
    );
};



const Support = () => {
    return (
        <View>
            <Menu />
            <Text style={suportStyle.title}>¿Con qué te podemos ayudar?</Text>
            <View style={suportStyle.infoSupport}>
                <Text style={suportStyle.listItemText}>Queja</Text>
                <Text style={suportStyle.listItemTextInfo}>Aquí podras hacer alguna queja</Text>
                <TextInput style={suportStyle.inputSupport}
                    numberOfLines={4}
                />
                <TouchableOpacity style={suportStyle.sendButton}>
                    <Text style={suportStyle.sendButtonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
            <View style={suportStyle.infoSupport}>
                <Text style={suportStyle.listItemText}>Petición</Text>
                <Text style={suportStyle.listItemTextInfo}>Aquí podras hacer alguna petición</Text>
                <TextInput style={suportStyle.inputSupport}
                    numberOfLines={4}
                />
                <TouchableOpacity style={suportStyle.sendButton}>
                    <Text style={suportStyle.sendButtonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
            <View style={suportStyle.infoSupport}>
                <Text style={suportStyle.listItemText}>Recurso</Text>
                <Text style={suportStyle.listItemTextInfo}>Aquí podras pedir algun recurso</Text>
                <TextInput style={suportStyle.inputSupport}
                    numberOfLines={4}
                />
                <TouchableOpacity style={suportStyle.sendButton}>
                    <Text style={suportStyle.sendButtonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

export default Support; 