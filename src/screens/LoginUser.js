import React, { useState, useContext, useEffect } from "react";
import { View, Text, TextInput, Alert, ScrollView, Pressable } from "react-native";
import MyOwnButton from "../components/MyOwnButton";
import StylesLogin from "../styles/styleLoginUser";
import { colors } from "../styles/globalStyles";
import { UserContext } from '../context/UserContext';

const LoginUser = ({ navigation }) => {
  const { loginUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ email: '', password: '' });

  useEffect(() => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !regex.test(email)) {
      setError(prev => ({ ...prev, email: 'Usa el formato ejemplo@correo.com' }));
    } else {
      setError(prev => ({ ...prev, email: '' }));
    }
  }, [email]);

  useEffect(() => {
    const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password && !pattern.test(password)) {
      setError(prev => ({
        ...prev,
        password: 'Debe incluir 1 mayúscula, 1 carácter especial, letras y números, y al menos 8 caracteres.',
      }));
    } else {
      setError(prev => ({ ...prev, password: '' }));
    }
  }, [password]);

  const handleLogin = () => {
    if (!error.email && !error.password && email && password) {
      try {
        loginUser(email, password);
        navigation.navigate('HomeDrawer');
      } catch (err) {
        Alert.alert('Error', err.message);
      }
    } else {
      Alert.alert('Error', 'Por favor, ingresa un email y contraseña válidos.');
    }
  };

  return (
    <ScrollView>
      <View style={StylesLogin.container}>
        <Text style={StylesLogin.text}>
          Ingresa tu E-Mail y Contraseña de Mercado Libre
        </Text>
        <View style={StylesLogin.inputContainer}>
          <Text style={StylesLogin.textTopInput}>E-mail</Text>
          <TextInput
            style={[StylesLogin.input, error.email && StylesLogin.inputError]}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor={colors.highlight}
            autoCapitalize="none"
            keyboardType="email-address"
            color="black"
          />
          {error.email ? <Text style={StylesLogin.errorText}>{error.email}</Text> : null}
        </View>

        <View style={StylesLogin.inputContainer}>
          <Text style={StylesLogin.textTopInput}>Contraseña</Text>
          <TextInput
            style={[StylesLogin.input, error.password && StylesLogin.inputError]}
            value={password}
            onChangeText={setPassword}
            placeholder="Contraseña"
            placeholderTextColor={colors.highlight}
            secureTextEntry
            color="black"
          />
          {error.password ? <Text style={StylesLogin.errorText}>{error.password}</Text> : null}
        </View>

        <MyOwnButton
          title="Iniciar Sesión"
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


          <Pressable style={StylesLogin.containerFooter}
            onPress={() => navigation.navigate('Privacy')}>
            <Text style={StylesLogin.footerText}>Cómo cuidamos tu privacidad</Text>
          </Pressable>


        </View>
      </View>
    </ScrollView>
  );
};

export default LoginUser;
