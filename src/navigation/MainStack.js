import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Offer from "../screens/Offer";
import HomeScreen from "../screens/HomeScreen";
import Category from "../screens/Category";
import Tecnologia from "../screens/categoryTechnology/Tecnologia";

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen 
                 name = 'Category'
                 component={Category}
                 options={{ headerShown: false }}
                /> 

<Stack.Screen 
                 name = 'Tecnologia'
                 component={Tecnologia}
                 options={{ headerShown: false }}
                /> 
                
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