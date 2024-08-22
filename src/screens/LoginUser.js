import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from "react-native";
import MyOwnButton from "../components/MyOwnButton"
import Styles from "../styles/styleLoginUser";
import { colors, imgs } from "../styles/globalStyles";


const LoginUser = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({ username: '', password: '' });

    const validateUsername = (text) => {
        setUsername(text);
        if (text.length > 10) {
            setError({ ...error, username: 'Máximo 10 caracteres' });
        } else if (text.length == 0) {
            setError({ ...error, username: 'Campo vacio' });
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
            // Lógica para iniciar sesión
            navigation.navigate('Inicio');
        }
    };

    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../img/back.png')} style={imgs.rowBack} />
                </TouchableOpacity>
            </View>
            <Text style={Styles.text}>
                Ingresa tu e-mail, teléfono o usuario de Mercado Libree:
            </Text>
            <Text style={Styles.textTopInput}>E-mail</Text>
            <TextInput
                style={[, Styles.input, error.username && Styles.inputError]}
                value={username}
                onChangeText={validateUsername}
                placeholder="Usuario"
                placeholderTextColor={colors.secondaryElements}
                color="black"
            />
            {error.username ? <Text style={Styles.errorText}>{error.username}</Text> : null}

            <Text style={Styles.textTopInput}>Contraseña</Text>
            <TextInput
                style={[Styles.input, error.password && Styles.inputError]}
                value={password}
                onChangeText={validatePassword}
                placeholder="Contraseña"
                placeholderTextColor={colors.secondaryElements}
                secureTextEntry
                color="black"
            />
            {error.password ? <Text style={styles.errorText}>{error.password}</Text> : null}

            <MyOwnButton
                title="Iniciar sesión"
                disabled={!!error.username || !!error.password}
                onPress={handleLogin}

            />
            <MyOwnButton
                title="Registrarse"
                onPress={() => { navigation.navigate('SignUp') }}
                style={Styles.buttonSignin && Styles.textButtonSignIn}
            />
        </View>
    );
};

const LoginUser2 = ({ navigation }) => {
    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../img/back.png')} style={imgs.rowBack} />
                </TouchableOpacity>
            </View>
            <View style={Styles.containerForm}>
                <Text style={Styles.text}>
                    Ingresa tu e-mail, teléfono o usuario de Mercado Libree:
                </Text>
                <Text style={Styles.textTopInput}>E-mail</Text>
                <TextInput textContentType="emailAddress" style={Styles.input}>
                </TextInput>
                <View style={Styles.buttons}>
                    <TouchableOpacity style={Styles.buttonLogIn}>
                        <Text style={Styles.textButtonLogIn}>
                            Iniciar sesión
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.buttonSignin}>
                        <Text style={Styles.textButtonSignIn}>
                            Crear Cuenta
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={Styles.containerFooter}>
                <Text style={Styles.footerText}>Como cuidamos tu privacidad</Text>
            </TouchableOpacity>
        </View>

    );
}

export default LoginUser;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        color: 'blue',
    },
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});

