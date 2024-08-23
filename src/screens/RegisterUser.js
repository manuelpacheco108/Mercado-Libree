import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import MyOwnButton from '../components/MyOwnButton';
import { colors } from '../styles/globalStyles';
import StylesRegisterUser from '../styles/styleRegisterUser';
import DrawerNavigation from '../components/DrawerNavigation';

const RegisterUser = ({ navigation }) => {
     // este
    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [password, setPassword] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [error, setError] = useState({ email: '', password: '', birthdate: '' });

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

    const validateBirthdate = (text) => {
        setBirthdate(text);
        const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19[7-9][4-9]|19[8-9]\d|20[0-2]\d)$/;
        if (!regex.test(text)) {
            setError({ ...error, birthdate: 'Formato incorrecto. Usa DD/MM/AAAA' });
        } else {
            const [day, month, year] = text.split('/').map(Number);
            const currentYear = new Date().getFullYear();
            const age = currentYear - year;
            if (age < 18 || age > 50) {
                setError({ ...error, birthdate: 'Debes tener entre 18 y 50 años' });
            } else {
                setError({ ...error, birthdate: '' });
            }
        }
    };

    const handleSignUp = () => {
        if (!error.email && !error.password && !error.birthdate && email && password && nombre && apellido && birthdate) {
            /* if (setUserEmail) {
                setUserEmail(email);  // Este
            } */
            navigation.navigate('Inicio',{userEmail: email}); // Este
        }
    };

    return (
        <View style={StylesRegisterUser.container}>
            <DrawerNavigation.DrawerHeader />
            <Text style={StylesRegisterUser.label}>E-mail</Text>
            <TextInput
                style={[StylesRegisterUser.input, error.email && StylesRegisterUser.inputError]}
                value={email}
                onChangeText={validateEmail}
                placeholder="ejemplo@correo.com"
                placeholderTextColor={colors.secondaryElements}
                color="black"
                keyboardType='email-address'
            />
            {error.email ? <Text style={StylesRegisterUser.errorText}>{error.email}</Text> : null}

            <Text style={StylesRegisterUser.label}>Nombre</Text>
            <TextInput
                style={StylesRegisterUser.input}
                value={nombre}
                onChangeText={setNombre}
                placeholder="Nombre"
                placeholderTextColor={colors.secondaryElements}
                color="black"
            />

            <Text style={StylesRegisterUser.label}>Apellido</Text>
            <TextInput
                style={StylesRegisterUser.input}
                value={apellido}
                onChangeText={setApellido}
                placeholder="Apellido"
                placeholderTextColor={colors.secondaryElements}
                color="black"
            />

            <Text style={StylesRegisterUser.label}>Contraseña</Text>
            <TextInput
                style={[StylesRegisterUser.input, error.password && StylesRegisterUser.inputError]}
                value={password}
                onChangeText={validatePassword}
                placeholder="Contraseña"
                placeholderTextColor={colors.secondaryElements}
                secureTextEntry
                color="black"
            />
            {error.password ? <Text style={StylesRegisterUser.errorText}>{error.password}</Text> : null}

            <Text style={StylesRegisterUser.label}>Fecha de Nacimiento</Text>
            <TextInput
                style={[StylesRegisterUser.input, error.birthdate && StylesRegisterUser.inputError]}
                value={birthdate}
                onChangeText={validateBirthdate}
                placeholder="DD-MM-AAAA"
                placeholderTextColor={colors.secondaryElements}
                color="black"
                keyboardType="numbers-and-punctuation"
            />
            {error.birthdate ? <Text style={StylesRegisterUser.errorText}>{error.birthdate}</Text> : null}

            <MyOwnButton
                title="Crear cuenta"
                onPress={handleSignUp}
                disabled={!!error.email || !!error.password || !!error.birthdate}
            />
        </View>
    );
};

export default RegisterUser;
