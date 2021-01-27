import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import Login from './app/Login';
import WelcomeScreen from './app/WelcomeScreen';
import SignUp from './app/SignUp';
import Tabs from "./app/Tabs"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

var socket = new WebSocket("ws://192.168.1.68:8080"); 

socket.onopen = function(event) {
  console.log("Connection Established");
  socket.send("Frontend client successfully connected to Websocket Server");
}

socket.onmessage = function(event) {
  console.log(event.data);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="WelcomeScreen"
      screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="SignupScreen" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: '10%',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  logoFont: {
    fontFamily: 'AppleSDGothicNeo-SemiBold',
    fontSize: 70,
  },
  logoSubtitleFont: {
    fontFamily: 'AppleSDGothicNeo-Light',
    fontSize: 20,
  }
});
