// LoginSigninUser.js
import React, { useState } from "react";
import { View, Text, Pressable, Image, TextInput } from "react-native";
import MyOwnButton from "../components/MyOwnButton";
import StylesLogin from "../styles/styleLoginUser";
import { colors, imgs } from "../styles/globalStyles";
import DrawerNavigation from '../components/DrawerNavigation'



const LoginUser = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [error, setError] = useState({ username: '', password: '' });
    const [password, setPassword] = useState('');

    const validateUsername = (text) => {
        setUsername(text);
        if (text.length > 10) {
            setError({ ...error, username: 'Máximo 10 caracteres' });
        } else if (text.length === 0) {
            setError({ ...error, username: 'Campo vacío' });
        } else {
            setError({ ...error, username: '' });
        }
    };

    const validatePassword = (text) => {
        setPassword(text);
        const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;
        if (!pattern.test(text)) {
            setError({
                ...error,
                password: 'Debe incluir 1 Mayúscula, 1 carácter especial, letras y números.',
            });
        } else {
            setError({ ...error, password: '' });
        }
    };

    const handleLogin = () => {
        if (!error.username && !error.password && username && password) {
            navigation.navigate('Inicio');
        }
    };

    return (
        <View style={StylesLogin.container}>
            <DrawerNavigation.DrawerHeader/>
            <Text style={StylesLogin.text}>
                Ingresa tu e-mail, teléfono o usuario de Mercado Libre:
            </Text>
            <Text style={StylesLogin.textTopInput}>E-mail</Text>
            <TextInput
                style={[StylesLogin.input, error.username && StylesLogin.inputError]}
                value={username}
                onChangeText={validateUsername}
                placeholder="Usuario"
                placeholderTextColor={colors.secondaryElements}
                color="black"
            />
            {error.username ? <Text style={StylesLogin.errorText}>{error.username}</Text> : null}

            <Text style={StylesLogin.textTopInput}>Contraseña</Text>
            <TextInput
                style={[StylesLogin.input, error.password && StylesLogin.inputError]}
                value={password}
                onChangeText={validatePassword}
                placeholder="Contraseña"
                placeholderTextColor={colors.secondaryElements}
                secureTextEntry
                color="black"
            />
            {error.password ? <Text style={StylesLogin.errorText}>{error.password}</Text> : null}

            <MyOwnButton
                title="Iniciar sesión"
                disabled={!!error.username || !!error.password}
                onPress={handleLogin}
            />
            <MyOwnButton
                title="Registrarse"
                onPress={() =>  {navigation.navigate('RegisterUser'); } }
                style={[StylesLogin.buttonSignin, StylesLogin.textButtonSignIn]}
            />
            <View style={StylesLogin.containerFooter}>
                <Text style={StylesLogin.footerText}>Como cuidamos tu privacidad</Text>
            </View>
        </View>
    );
};


export default  LoginUser;
