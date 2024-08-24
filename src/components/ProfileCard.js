import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import profileStyles from '../styles/profileStyles';
import { Card } from 'react-native-paper';


const ProfileCard = ({ profile, navigation }) => {
    return (
        <View>
            <View style={profileStyles.profileContainer}>
                <Image style={profileStyles.image} source={profile.photo} />
                <View style={profileStyles.textContainer}>
                    <Text style={profileStyles.title}>{profile.name}</Text>
                    <Text style={profileStyles.description}>{profile.date}</Text>
                </View>
            </View>
            <Card style={profileStyles.infoCard}>
                <Text style={profileStyles.titlePrivacy}>{profile.name}</Text>
                <Text style={profileStyles.description}>{profile.date}</Text>
                <Text style={profileStyles.description}>{profile.age}</Text>
                <Text style={profileStyles.description}>{profile.gender}</Text>
                <Text style={profileStyles.titlePrivacy}>Tarjetas</Text>
                <View style={profileStyles.buy}>
                    <Image style={profileStyles.payCard} source={profile.master} />
                    <Image style={profileStyles.payCard} source={profile.visa} />
                    <Image style={profileStyles.payCard} source={profile.bancolombia} />
                </View>
                <Pressable
                    onPress={() => navigation.navigate('Privacy')}>
                    <Text style={profileStyles.titlePrivacy}>Terminos y Condiciones</Text>
                    <Text style={profileStyles.description}>Ver Terminos y Condiciones</Text>
                </Pressable>
            </Card>
        </View>
    );
};
export default ProfileCard;
