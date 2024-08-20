import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import LoginUser from '../screens/LoginUser';
import Search from '../components/NavBar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import DrawerContent from '../components/DrawerContent';


const StackNav = () => {
    const Stack = createStackNavigator();
    const navigation = useNavigation();
    return (
        <Stack.Navigator
            screenOptions={{
                statusBarColor: '#0163d2',
                headerStyle: {
                    backgroundColor: '#0163d2',
                },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
            }}>
            <Stack.Screen
                name="Inicio"
                component={HomeScreen}
                options={{
                    headerLeft: () => {
                        return (
                            <Icon
                                name="menu"
                                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                                size={30}
                                color="#fff"
                            />
                        );
                    },
                }}
            />

            <Stack.Screen
                name='LoginUser'
                component={LoginUser}
            />
        </Stack.Navigator>
    );
}

const DrawerNav = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent{...props} />}
            screenOptions={{
                headerShown: false

            }}>
            <Drawer.Screen
                name='Inicio'
                component={StackNav}
            />

        </Drawer.Navigator>

    );
}
const HamburguerNavigation = () => {
    return (
        <NavigationContainer>
            <DrawerNav />
        </NavigationContainer>
    );
}

export default HamburguerNavigation;