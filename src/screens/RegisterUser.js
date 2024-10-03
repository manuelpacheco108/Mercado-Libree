import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Alert, Image, ScrollView } from 'react-native';
import MyOwnButton from '../components/MyOwnButton';
import StylesRegisterUser from '../styles/styleRegisterUser';
import DrawerNavigation from '../components/DrawerNavigation';
import { UserContext } from '../context/UserContext'; // Importar el contexto

const RegisterUser = ({ navigation }) => {
  const { registerUser } = useContext(UserContext); // Acceder a la función para registrar el usuario

  // Estado para los datos de usuario
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [imageUrl, setImageUrl] = useState(''); // Estado para la URL de la imagen

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
    const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Al menos 8 caracteres
    if (!pattern.test(text)) {
      setError({
        ...error,
        password: 'Debe incluir 1 mayúscula, 1 carácter especial, letras y números, y al menos 8 caracteres.',
      });
    } else {
      setError({ ...error, password: '' });
    }
  };

  const validateBirthdate = (value) => {
    const birthDateObj = new Date(value);
    const today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const m = today.getMonth() - birthDateObj.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    if (isNaN(birthDateObj.getTime()) || age < 18 || age > 50) {
      setError((prev) => ({ ...prev, birthdate: 'Debes ser mayor de 18 años y menor a 50 años.' }));
    } else {
      setError((prev) => ({ ...prev, birthdate: '' }));
    }
    setBirthdate(value);
  };

  const handleSignUp = () => {
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
        registerUser({
          nombre,
          apellido,
          gender,
          email,
          password,
          birthdate,
          profilePhoto: imageUrl || null,
        });

        Alert.alert('Éxito', 'Cuenta creada exitosamente.');
        navigation.navigate('Home'); // Redirigir al login después de registrarse
      } catch (err) {
        Alert.alert('Error', err.message);
      }
    } else {
      Alert.alert('Error', 'Por favor, corrige los errores antes de continuar.');
    }
  };

  return (
    <ScrollView>
      <DrawerNavigation.Menu navigation={navigation} />
      <View style={StylesRegisterUser.container}>
        <TextInput
          style={StylesRegisterUser.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={StylesRegisterUser.input}
          placeholder="Apellido"
          value={apellido}
          onChangeText={setApellido}
        />
        <TextInput
          style={StylesRegisterUser.input}
          placeholder="Género"
          value={gender}
          onChangeText={setGender}
        />
        <TextInput
          style={StylesRegisterUser.input}
          placeholder="Email"
          value={email}
          onChangeText={validateEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {error.email ? <Text style={StylesRegisterUser.errorText}>{error.email}</Text> : null}

        <TextInput
          style={StylesRegisterUser.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={validatePassword}
          secureTextEntry
        />
        {error.password ? <Text style={StylesRegisterUser.errorText}>{error.password}</Text> : null}

        <TextInput
          style={StylesRegisterUser.input}
          placeholder="Fecha de nacimiento (YYYY-MM-DD)"
          value={birthdate}
          onChangeText={validateBirthdate}
        />
        {error.birthdate ? <Text style={StylesRegisterUser.errorText}>{error.birthdate}</Text> : null}

        {/* Campo para ingresar la URL de la imagen */}
        <TextInput
          style={StylesRegisterUser.input}
          placeholder="URL de imagen de perfil"
          value={imageUrl}
          onChangeText={setImageUrl}
        />

        {/* Mostrar vista previa de la imagen */}
        {imageUrl ? (
          <Image source={{ uri: imageUrl }} style={{ width: 100, height: 100, marginTop: 10 }} />
        ) : null}

        <MyOwnButton
          title="Crear cuenta"
          onPress={handleSignUp}
          disabled={!!error.email || !!error.password || !!error.birthdate}
        />
      </View>
    </ScrollView>
  );
};

export default RegisterUser;
