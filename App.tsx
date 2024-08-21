import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./src/screens/HomeScreen";

const App = () => {
    return (
        <NavigationContainer>
            <HomeScreen />
        </NavigationContainer>
    );
};

export default App;
