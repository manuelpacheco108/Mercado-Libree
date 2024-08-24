import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import MyOwnButton from '../components/MyOwnButton';
import { colors } from '../styles/globalStyles';
import StylesRegisterUser from '../styles/styleRegisterUser';
import DrawerNavigation from '../components/DrawerNavigation';
import suportStyle from '../styles/suportStyle';

const RegisterUser = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [password, setPassword] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [error, setError] = useState({ email: '', password: '', birthdate: '' });

    const validateEmail = (text) => {
        setEmail(text);
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!pattern.test(text)) {
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

    const validateBirthdate = (text) => {
        setBirthdate(text);
        const pattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19[7-9][4-9]|19[8-9]\d|20[0-2]\d)$/;
        if (!pattern.test(text)) {
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
            navigation.navigate('Home');
        }
    };

    return (
        <View>
            <DrawerNavigation.Menu navigation={navigation} />
            <View style={StylesRegisterUser.container}>
                <Text style={suportStyle.title}>Registro de Usuario</Text>
                <Text style={StylesRegisterUser.label}>E-mail</Text>
                <TextInput
                    style={[StylesRegisterUser.input, error.email && StylesRegisterUser.inputError]}
                    value={email}
                    onChangeText={validateEmail}
                    placeholder="ejemplo@correo.com"
                    placeholderTextColor={colors.secondaryElements}
                    color="black"
                    keyboardType='email-address'
                    mode='outlined'
                    activeOutlineColor='#146C94'
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
                    mode='outlined'
                    activeOutlineColor='#146C94'
                />

                <Text style={StylesRegisterUser.label}>Apellido</Text>
                <TextInput
                    style={StylesRegisterUser.input}
                    value={apellido}
                    onChangeText={setApellido}
                    placeholder="Apellido"
                    placeholderTextColor={colors.secondaryElements}
                    color="black"
                    mode='outlined'
                    activeOutlineColor='#146C94'
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
                    mode='outlined'
                    activeOutlineColor='#146C94'
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
                    mode='outlined'
                    activeOutlineColor='#146C94'
                />
                {error.birthdate ? <Text style={StylesRegisterUser.errorText}>{error.birthdate}</Text> : null}

                <MyOwnButton
                    title="Crear cuenta"
                    onPress={handleSignUp}
                    disabled={!!error.email || !!error.password || !!error.birthdate}
                />
            </View>
        </View>
    );
};

export default RegisterUser;
