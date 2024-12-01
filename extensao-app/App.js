import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AdminScreen from './screens/AdminScreen';
import ProfessorScreen from './screens/ProfessorScreen';
import ResponsaveisScreen from './screens/ResponsaveisScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="Professor" component={ProfessorScreen} />
        <Stack.Screen name="Responsaveis" component={ResponsaveisScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
