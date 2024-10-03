import React, { useContext } from 'react';
import { View, Text, FlatList, Pressable, Image } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import profileStyles from '../styles/profileStyles';
import { UserContext } from '../context/UserContext'; // Importar el contexto

const Profile = ({ navigation }) => {
  const { currentUser, logoutUser } = useContext(UserContext); // Acceder al usuario actual y función de logout

  if (!currentUser) {
    return (
      <View style={profileStyles.container}>
        <Text>No hay usuario logueado.</Text>
      </View>
    );
  }

  // Datos del perfil del usuario actual
  const profile = [
    {
      id: 1,
      photo: currentUser.profilePhoto ? { uri: currentUser.profilePhoto } : require('../img/profile.jpg'),
      name: `${currentUser.nombre} ${currentUser.apellido}`,
      date: currentUser.birthdate,
      age: calculateAge(currentUser.birthdate),
      gender: currentUser.gender,
      master: require('../img/mastercard.png'),
      visa: require('../img/visa.png'),
      bancolombia: require('../img/bancolombia.png')
    }
  ];

  // Función para calcular la edad
  function calculateAge(birthdate) {
    const birthDateObj = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const m = today.getMonth() - birthDateObj.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <View>
      <Menu navigation={navigation} />
      <FlatList
        data={profile}
        renderItem={({ item }) => <ProfileCard profile={item} navigation={navigation} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <Pressable style={profileStyles.logoutButton}
        onPress={() => {
          logoutUser(); // Cerrar sesión en el contexto
          navigation.reset({
            index: 0,
            routes: [{ name: 'LoginUser' }],
          });
        }}
      >
        <Text style={profileStyles.logoutButtonText}>Cerrar Sesión</Text>
      </Pressable>
    </View>
  );
};

// Componente del menú
const Menu = ({ navigation }) => {
  return (
    <View style={profileStyles.menuContainer}>
      <Pressable 
        style={profileStyles.menuButton} 
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          });
        }}
      >
        <Image
          source={require('../img/back.png')}
          style={profileStyles.menuIcon}
        />
      </Pressable>
      <Text style={profileStyles.textProfile}>Mi perfil</Text>
    </View>
  );
};

export default Profile;
