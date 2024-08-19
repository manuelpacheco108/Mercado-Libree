import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import LoginUser from '../screens/LoginUser';

const Stack = createStackNavigator();

const HamburguerNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Hamburguer' 
                component={HomeScreen}
            />

            <Stack.Screen 
                name='LoginUser' 
                component={LoginUser}
            />
        </Stack.Navigator>
    );
}

export default HamburguerNavigation;