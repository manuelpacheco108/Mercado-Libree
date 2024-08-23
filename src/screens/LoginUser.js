import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import MyOwnButton from "../components/MyOwnButton";
import StylesLogin from "../styles/styleLoginUser";
import { colors } from "../styles/globalStyles";
import DrawerNavigation from "../components/DrawerNavigation";

const LoginUser = ({route, navigation}) => {
    const { setUserEmail } = route.params || {};
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({ email: '', password: '' });

    const validateEmail = (text) => {
        setEmail(text);
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(text)) {
            setError({ ...error, email: 'Usa el formato ejemplo@correo.com' });
        } else {
            setError({ ...error, email: '' });
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
        if (!error.email && !error.password && email && password) {
          if (setUserEmail) {
            setUserEmail(email);  // Se actualiza el email en el DrawerNavigation
          }
          navigation.navigate('Inicio'); // Navega a la pantalla principal
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
                style={[StylesLogin.input, error.email && StylesLogin.inputError]}
                value={email}
                onChangeText={validateEmail}
                placeholder="Usuario"
                placeholderTextColor={colors.secondaryElements}
                color="black"
            />
            {error.email ? <Text style={StylesLogin.errorText}>{error.email}</Text> : null}

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
                disabled={!!error.email || !!error.password}
                onPress={handleLogin}
                style={[StylesLogin.buttonLogIn, StylesLogin.textButtonLogIn]}
            />
            <MyOwnButton
                title="Registrarse"
                onPress={() => { navigation.navigate('RegisterUser'); }}
                style={[StylesLogin.buttonSignin, StylesLogin.textButtonSignIn]}
            />
            <View style={StylesLogin.containerFooter}>
                <Text style={StylesLogin.footerText}>Cómo cuidamos tu privacidad</Text>
            </View>
        </View>
        
    );
};

export default LoginUser;
