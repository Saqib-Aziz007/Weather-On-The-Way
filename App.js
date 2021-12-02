import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './app/Routs/AppNavigator';
import LoadingScreen from './app/Screens/LoadingScreen';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
