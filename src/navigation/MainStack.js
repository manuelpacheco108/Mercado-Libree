import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Offer from "../screens/Offer";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                 name = 'Offer'
                 component={Offer}
                 options={{ headerShown: false }}
                />
                <Stack.Screen 
                 name = 'Home'
                 component={HomeScreen}
                 options={{ headerShown: false }}
                />
                    
               
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainStack