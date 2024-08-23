import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./src/screens/HomeScreen";
import PaymentScreen from './src/screens/Payments';

const App = () => {
    return (
        <NavigationContainer>
            <HomeScreen/>
        </NavigationContainer>
    );
};

export default App;
