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
import Favorite from "../screens/Favorite";
import Profile from "../screens/Profile";
import Support from "../screens/Support";
import Shopping from "../screens/Shopping";
import Privacy from "../screens/Privacy";
import DetailCard from "../components/DetailCard";
import ProductDetail from "../screens/ProductDetail";

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='Favorite'
                    component={Favorite}
                    options={{ headerShown: false }}
                />


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
                    name='Fashion'
                    component={Fashion}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='Profile'
                    component={Profile}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='Support'
                    component={Support}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='Shopping'
                    component={Shopping}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='Privacy'
                    component={Privacy}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='ProductDetail'
                    component={ProductDetail}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainStack