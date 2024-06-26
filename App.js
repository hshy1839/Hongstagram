import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './components/Main';
import Header from './components/Header'; // Header 컴포넌트 추가
import Footer from './components/Footer'; // Footer 컴포넌트 추가
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import DirectMessage from './components/DirectMessage';
import DMstatus from './components/DMstatus';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={Main} options={{header: () => <Header />,}} />
        <Stack.Screen name="Profile" component={Profile} options={{header: () => <Header />,}} />
        <Stack.Screen name="Footer" component={Footer} options={{ headerShown: false }} /> 
        <Stack.Screen name="DMstatus" component={DMstatus} options={{header: () => <Header />,}} />
        <Stack.Screen name="DirectMessage" component={DirectMessage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
