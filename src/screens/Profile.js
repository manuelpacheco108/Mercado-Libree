import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import profileStyles from '../styles/profileStyles';

const profile = [
    {
        id: 1,
        photo: require('../img/profile.jpg'),
        name: 'Goku Ronaldo Ramirez Restrepo',
        date: '05/12/2004',
        price: '300000$',
        status: 'Sí'
    }
]

const Menu = () => {
    return (
        <View style={profileStyles.menuContainer}>
            <TouchableOpacity style={profileStyles.menuButton} onPress={() => console.log('Menu clicked')}>
                <Image
                    source={require('../img/back.png')}
                    style={profileStyles.menuIcon}
                />
            </TouchableOpacity>
            <Text style={profileStyles.textProfile}>Mi Perfil</Text>
        </View>
    );
};

const Profile = () => {
    return (
        <View>
            <Menu />
            <FlatList
                data={profile}
                renderItem={({ item }) => <ProfileCard profile={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
            <View style={profileStyles.infoProfile}>
                <Text style={profileStyles.listItemText}>Tu información</Text>
                <Text style={profileStyles.listItemTextInfo}>Aquí veras tus datos dentro de la aplicación</Text>
                <Text style={profileStyles.listItemText}>Tarjetas</Text>
                <Text style={profileStyles.listItemTextInfo}>Aquí veras las tarjetas que ingreses</Text>
                <Text style={profileStyles.listItemText}>Privacidad</Text>
                <Text style={profileStyles.listItemTextInfo}>Aquí veras los terminos y condiciones</Text>
            </View>
            <TouchableOpacity style={profileStyles.logoutButton}>
                    <Text style={profileStyles.logoutButtonText}>Cerrar Sesión</Text>
                </TouchableOpacity>

        </View>

    );
}

export default Profile; 