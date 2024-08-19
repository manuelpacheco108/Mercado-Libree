import React from "react";
import { View, Text, Button } from "react-native";

const LoginUser =({navigation})=>{
    return(
        <View>
            <Text>Profile Manuel</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>

    );
}

export default LoginUser;
