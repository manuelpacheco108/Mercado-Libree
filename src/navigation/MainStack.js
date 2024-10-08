import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Offer from "../screens/Offer";
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
import ProductDetail from "../screens/ProductDetail";
import RegisterUser from "../screens/RegisterUser";
import LoginUser from "../screens/LoginUser";
import BuyCart from "../screens/BuyCart";
import PaymentScreen from "../screens/PaymentScreen";
import HomeDrawer from "./HomeDrawer";

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name='LoginUser'
                    component={LoginUser}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='HomeDrawer'
                    component={HomeDrawer}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='PaymentScreen'
                    component={PaymentScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='BuyCart'
                    component={BuyCart}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='RegisterUser'
                    component={RegisterUser}
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