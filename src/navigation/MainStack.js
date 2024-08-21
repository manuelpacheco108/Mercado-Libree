import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Offer from "../screens/Offer";
import HomeScreen from "../screens/HomeScreen";
import Category from "../screens/Category";
import Technology from "../screens/categoryTechnology/Technology";
import HomeCategory from "../screens/categoryHome/HomeCategory";
import Pet from "../screens/categoryPet/Pet";
import Makeup from "../screens/categoryMakeup/Makeup";
import Fashion from "../screens/categoryFashion/Fashion";

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name='Technology'
                    component={Technology}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='Category'
                    component={Category}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='HomeCategory'
                    component={HomeCategory}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='Makeup'
                    component={Makeup}
                    options={{ headerShown: false }}
                />


                <Stack.Screen
                    name='Pet'
                    component={Pet}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='Offer'
                    component={Offer}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='Fashion'
                    component={Fashion}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainStack