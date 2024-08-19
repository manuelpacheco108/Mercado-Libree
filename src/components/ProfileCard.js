import React from 'react';
import { View, Text, Image } from 'react-native';
import profileStyles from '../styles/profileStyles';

const ProfileCard = ({ profile }) => {
    return (
        <View style={profileStyles.profileContainer}>
            <Image style={profileStyles.image} source={profile.photo} />
            <View style={profileStyles.textContainer}>
                <Text style={profileStyles.title}>{profile.name}</Text>
                <Text style={profileStyles.description}>{profile.date}</Text>
            </View>
        </View>   
    );
};
export default ProfileCard;
