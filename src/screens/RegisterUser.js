import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, Alert, Image, ScrollView } from 'react-native';
import MyOwnButton from '../components/MyOwnButton';
import StylesRegisterUser from '../styles/styleRegisterUser';
import { UserContext } from '../context/UserContext'; // Importar el contexto
import DrawerNavigation from '../components/DrawerNavigation'; // Verifica si este es correcto

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

  // useEffect para validar el correo electrónico
  useEffect(() => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !pattern.test(email)) {
      setError((prevError) => ({ ...prevError, email: 'Usa el formato ejemplo@correo.com' }));
    } else {
      setError((prevError) => ({ ...prevError, email: '' }));
    }
  }, [email]); // Ejecutar cuando el email cambie

  // useEffect para validar la contraseña
  useEffect(() => {
    const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Al menos 8 caracteres
    if (password && !pattern.test(password)) {
      setError((prevError) => ({
        ...prevError,
        password: 'Debe incluir 1 mayúscula, 1 carácter especial, letras y números, y al menos 8 caracteres.',
      }));
    } else {
      setError((prevError) => ({ ...prevError, password: '' }));
    }
  }, [password]); // Ejecutar cuando la contraseña cambie

  // useEffect para validar la fecha de nacimiento solo si hay algo en el campo
  useEffect(() => {
    if (birthdate) { // Solo ejecutar la validación si el campo no está vacío
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
      // Si el campo de la fecha está vacío, no mostrar error
      setError((prevError) => ({ ...prevError, birthdate: '' }));
    }
  }, [birthdate]); // Ejecutar cuando la fecha de nacimiento cambie

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
      {/* Asegúrate de que este componente exista */}
      {DrawerNavigation && DrawerNavigation.Menu ? (
        <DrawerNavigation.Menu navigation={navigation} />
      ) : null}
      
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
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {error.email ? <Text style={StylesRegisterUser.errorText}>{error.email}</Text> : null}

        <TextInput
          style={StylesRegisterUser.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {error.password ? <Text style={StylesRegisterUser.errorText}>{error.password}</Text> : null}

        <TextInput
          style={StylesRegisterUser.input}
          placeholder="Fecha de nacimiento (YYYY-MM-DD)"
          value={birthdate}
          onChangeText={setBirthdate}
        />
        {/* Mostrar error solo si el campo no está vacío y hay un error */}
        {birthdate && error.birthdate ? <Text style={StylesRegisterUser.errorText}>{error.birthdate}</Text> : null}

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
          disabled={!!error.email || !!error.password || !!error.birthdate || !email || !password || !nombre || !apellido || !birthdate}
        />
      </View>
    </ScrollView>
  );
};

export default RegisterUser;
