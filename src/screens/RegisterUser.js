import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import MyOwnButton from '../components/MyOwnButton';
import { imgs } from '../styles/globalStyles'
import StylesRegisterUser from '../styles/styleRegisterUser'
import DrawerNavigation from '../components/DrawerNavigation';


const RegisterUser = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
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
        const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;
        if (!regex.test(text)) {
            setError({
                ...error,
                password: 'Debe incluir 1 Mayúscula, 1 carácter especial, letras y números.',
            });
        } else {
            setError({ ...error, password: '' });
        }
    };

    const handleSignUp = () => {
        if (!error.email && !error.password && email && password && nombre && apellido) {
            navigation.navigate('Inicio');
        }
    };

    return (
        <View style={StylesRegisterUser.container}>
            <DrawerNavigation.DrawerHeader/>
            <Text style={StylesRegisterUser.label}>E-mail</Text>
            <TextInput
                style={[StylesRegisterUser.input, error.email && StylesRegisterUser.inputError]}
                value={email}
                onChangeText={validateEmail}
                placeholder="ejemplo@correo.com"
            />
            {error.email ? <Text style={StylesRegisterUser.errorText}>{error.email}</Text> : null}
            <Text style={StylesRegisterUser.label}>Nombre</Text>
            <TextInput
                style={StylesRegisterUser.input}
                value={nombre}
                onChangeText={setNombre}
                placeholder="Nombre"
            />
            <Text style={StylesRegisterUser.label}>Apellido</Text>
            <TextInput
                style={StylesRegisterUser.input}
                value={apellido}
                onChangeText={setApellido}
                placeholder="Apellido"
            />

            <Text style={StylesRegisterUser.label}>Contraseña</Text>
            <TextInput
                style={[StylesRegisterUser.input, error.password && StylesRegisterUser.inputError]}
                value={password}
                onChangeText={validatePassword}
                placeholder="Contraseña"
                secureTextEntry
            />
            {error.password ? <Text style={StylesRegisterUser.errorText}>{error.password}</Text> : null}

            <MyOwnButton
                title="Crear cuenta"
                onPress={handleSignUp}
                disabled={!!error.email || !!error.password}
            />
            
        </View>
    );
};


export default RegisterUser;
