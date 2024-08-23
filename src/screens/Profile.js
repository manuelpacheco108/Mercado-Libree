import React from 'react';
import { View, Text, FlatList, Image, Pressable } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import profileStyles from '../styles/profileStyles';

const profile = [
  {
    id: 1,
    photo: require('../img/profile.jpg'),
    name: 'Goku Ronaldo Ocoro Pripra',
    date: '05/12/2004',
    age: '20',
    gender: 'Hombre',
    master: require('../img/mastercard.png'),
    visa: require('../img/visa.png'),
    bancolombia: require('../img/bancolombia.png')
  }
]

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


const Profile = ({ navigation }) => {
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
}

export default Profile; 