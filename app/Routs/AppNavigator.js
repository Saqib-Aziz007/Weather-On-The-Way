import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import CityScreen from '../Screens/CityScreen';
import LoadingScreen from '../Screens/LoadingScreen';

const Stack = createNativeStackNavigator();
const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName="Loading"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Loading" component={LoadingScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen
      name="City"
      component={CityScreen}
      options={{
        headerShown: true,
        title: 'Search',
      }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
