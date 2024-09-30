import React, { useContext } from 'react';
import { View, Text, FlatList, Pressable, Image } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import profileStyles from '../styles/profileStyles';
import { UserContext } from '../context/UserContext'; // Importar el contexto

const Profile = ({ navigation }) => {
  const { user } = useContext(UserContext); // Acceder a los datos del usuario

  // Array para el FlatList con los datos del usuario
  const profile = [
    {
      id: 1, 
      photo: user.profilePhoto ? { uri: user.profilePhoto } : require('../img/profile.jpg'),
      name: `${user.nombre} ${user.apellido}`,
      date: user.birthdate,
      age: new Date().getFullYear() - new Date(user.birthdate).getFullYear(),
      gender: `${user.gender}`, 
      master: require('../img/mastercard.png'),
      visa: require('../img/visa.png'),
      bancolombia: require('../img/bancolombia.png')
    }
  ];

  // hay más perfiles en el array
  const profileWithIds = profile.map((item, index) => ({
    ...item,
    id: index + 1, 
  }));

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

  return (
    <View>
      <Menu navigation={navigation} />
      <FlatList
        data={profileWithIds} // Usar el array con los ids generados automáticamente
        renderItem={({ item }) => <ProfileCard profile={item} navigation={navigation} />}
        keyExtractor={(item) => item.id.toString()} // El id es único y se convierte a string
      />
      <Pressable style={profileStyles.logoutButton}
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          });
        }}
      >
        <Text style={profileStyles.logoutButtonText}>Cerrar Sesión</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
