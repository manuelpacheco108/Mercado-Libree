import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, Alert, Image, ScrollView, Pressable } from 'react-native';
import MyOwnButton from '../components/MyOwnButton';
import StylesRegisterUser from '../styles/styleRegisterUser';
import { UserContext } from '../context/UserContext';
import { colors } from "../styles/globalStyles";
import favoriteStyles from '../styles/favoriteStyles';

const RegisterUser = ({ navigation }) => {
  const { registerUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const [error, setError] = useState({ email: '', password: '', birthdate: '' });

  useEffect(() => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !pattern.test(email)) {
      setError((prevError) => ({ ...prevError, email: 'Usa el formato ejemplo@correo.com' }));
    } else {
      setError((prevError) => ({ ...prevError, email: '' }));
    }
  }, [email]);

  useEffect(() => {
    const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password && !pattern.test(password)) {
      setError((prevError) => ({
        ...prevError,
        password: 'Debe incluir 1 mayúscula, 1 carácter especial, letras y números, y al menos 8 caracteres.',
      }));
    } else {
      setError((prevError) => ({ ...prevError, password: '' }));
    }
  }, [password]);

  useEffect(() => {
    if (birthdate) {
      const datePattern = /^\d{4}-\d{2}-\d{2}$/;
      const birthDateObj = new Date(birthdate);
      const today = new Date();
      let age = today.getFullYear() - birthDateObj.getFullYear();
      const m = today.getMonth() - birthDateObj.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
      }
      if (!datePattern.test(birthdate) || isNaN(birthDateObj.getTime()) || age < 18 || age > 50) {
        setError((prevError) => ({
          ...prevError,
          birthdate: 'Debes ser mayor de 18 años y menor a 50 años, y usar el formato YYYY-MM-DD.',
        }));
      } else {
        setError((prevError) => ({ ...prevError, birthdate: '' }));
      }
    } else {
      setError((prevError) => ({ ...prevError, birthdate: '' }));
    }
  }, [birthdate]);

  const handleSignUp = async () => {
    if (
      !error.email &&
      !error.password &&
      !error.birthdate &&
      email &&
      password &&
      nombre &&
      apellido &&
      birthdate
    ) {
      try {
        await registerUser({
          nombre,
          apellido,
          gender,
          email,
          password,
          birthdate,
          profilePhoto: imageUrl || null,
        });

        Alert.alert('Éxito', 'Cuenta creada exitosamente.');
        navigation.navigate('HomeDrawer');
      } catch (err) {
        Alert.alert('Error', err.message);
      }
    } else {
      Alert.alert('Error', 'Por favor, corrige los errores antes de continuar.');
    }
  };

  const Menu = ({ navigation }) => {
    return (
      <View style={favoriteStyles.menuContainer}>
        <Pressable
          style={favoriteStyles.menuButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={require('../img/back.png')}
            style={favoriteStyles.menuIcon}
          />
        </Pressable>
        <Text style={favoriteStyles.textFavorites}>Volver</Text>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Menu navigation={navigation} />
      <View style={StylesRegisterUser.container}>
        <Text style={StylesRegisterUser.title}>Regístrate en Mercado Libre</Text>
        <Text style={StylesRegisterUser.textTopInput}>Nombre</Text>
        <TextInput
          style={StylesRegisterUser.input}
          placeholder="Nombre"
          placeholderTextColor={colors.highlight}
          value={nombre}
          onChangeText={setNombre}
          color="black"
        />
        <Text style={StylesRegisterUser.textTopInput}>Apellido</Text>
        <TextInput
          style={StylesRegisterUser.input}
          placeholder="Apellido"
          placeholderTextColor={colors.highlight}
          value={apellido}
          onChangeText={setApellido}
          color="black"
        />
        <Text style={StylesRegisterUser.textTopInput}>Género</Text>
        <TextInput
          style={StylesRegisterUser.input}
          placeholder="Género"
          placeholderTextColor={colors.highlight}
          value={gender}
          onChangeText={setGender}
          color="black"
        />
        <Text style={StylesRegisterUser.textTopInput}>E-mail</Text>
        <TextInput
          style={StylesRegisterUser.input}
          placeholder="Email"
          placeholderTextColor={colors.highlight}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          color="black"
        />
        {error.email ? <Text style={StylesRegisterUser.errorText}>{error.email}</Text> : null}
        <Text style={StylesRegisterUser.textTopInput}>Contraseña</Text>
        <TextInput
          style={StylesRegisterUser.input}
          placeholder="Contraseña"
          placeholderTextColor={colors.highlight}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          color="black"
        />
        {error.password ? <Text style={StylesRegisterUser.errorText}>{error.password}</Text> : null}
        <Text style={StylesRegisterUser.textTopInput}>Fecha Nacimiento</Text>
        <TextInput
          style={StylesRegisterUser.input}
          placeholder="Fecha de nacimiento (YYYY-MM-DD)"
          placeholderTextColor={colors.highlight}
          value={birthdate}
          onChangeText={setBirthdate}
          color="black"
        />
        {birthdate && error.birthdate ? <Text style={StylesRegisterUser.errorText}>{error.birthdate}</Text> : null}

        <Text style={StylesRegisterUser.textTopInput}>Imagen</Text>
        <TextInput
          style={StylesRegisterUser.input}
          placeholder="URL de imagen de perfil"
          placeholderTextColor={colors.highlight}
          value={imageUrl}
          onChangeText={setImageUrl}
          color="black"
        />
        {imageUrl ? (
          <Image source={{ uri: imageUrl }} style={{ width: 100, height: 100, marginTop: 10 }} />
        ) : null}

        <MyOwnButton
          title="Crear cuenta"
          onPress={handleSignUp}
          disabled={!!error.email || !!error.password || !!error.birthdate || !email || !password || !nombre || !apellido || !birthdate}
        />
      </View>
    </ScrollView>
  );
};

export default RegisterUser;
