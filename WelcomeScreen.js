import React from 'react';
import { Platform, StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

export default function WelcomeScreen({navigation}) {
    return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.gifContainer}
          source={require('./assets/greenrlogo.gif')}
        />
        <View style={styles.space}/>
        <View style={styles.buttonContainer}>
           <Button
             color='tomato'
             title= 'Login'
             onPress={() => navigation.navigate('LoginScreen')}
           />
          <Button
             color='tomato'
             title= 'Sign-Up'
             fontFamily= 'AppleSDGothicNeo-UltraLight'
             onPress={() => navigation.navigate('SignupScreen')}
           />
        </View>
      </View>
      <Image
          style={styles.jpgContainer}
          source={require('./assets/SmartSensorRender1.jpg')}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#fff',
    },
    logoContainer: {
      flex: 1.2,
      alignItems: 'center',
      justifyContent: 'flex-start',
      top: '5%',
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    gifContainer: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    jpgContainer: {
      flex: 1.5,
      width: '100%',
      height: '100%',
    },
    logoSubtitleFont: {
      fontFamily: 'AppleSDGothicNeo-Light',
      fontSize: 20,
    },
    space: {
      height: 20,
    }
  });