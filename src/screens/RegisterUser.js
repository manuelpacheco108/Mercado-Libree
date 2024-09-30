import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Alert, Image, Button } from 'react-native';
import MyOwnButton from '../components/MyOwnButton';
import StylesRegisterUser from '../styles/styleRegisterUser';
import DrawerNavigation from '../components/DrawerNavigation';
import { UserContext } from '../context/UserContext'; // Importar el contexto

const RegisterUser = ({ navigation }) => {
  const { setUser } = useContext(UserContext); // Acceder a la función para actualizar el usuario

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

  const validateBirthdate = (value) => {
    const birthDateObj = new Date(value);
    const age = new Date().getFullYear() - birthDateObj.getFullYear();
    if (isNaN(birthDateObj.getTime()) || age < 18 || age > 50) {
      setError((prev) => ({ ...prev, birthdate: 'Debes ser mayor de 18 años y menor a 50 años' }));
    } else {
      setError((prev) => ({ ...prev, birthdate: '' }));
    }
    setBirthdate(value);
  };

  const handleSignUp = () => {
    if (!error.email && !error.password && !error.birthdate && email && password && nombre && apellido && birthdate) {
      // Actualizar el contexto del usuario
      setUser({
        nombre,
        apellido,
        gender,
        email,
        birthdate,
        profilePhoto: imageUrl, 
      });

      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Por favor, corrige los errores antes de continuar.');
    }
  }
  
  return (
    <View>
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
          placeholder="Genero"
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
        {imageUrl ? <Image source={{ uri: imageUrl }} style={{ width: 100, height: 100, marginTop: 10 }} /> : null}

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
