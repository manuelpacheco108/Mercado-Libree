import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Button } from "react-native"

import Search from "../components/Search";

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <View>
                <Search />
            </View>
            <Button
                title="Login"
                onPress={()=> navigation.navigate('LoginUser')
                }
            />
        </View>
    );
}


export default HomeScreen;
