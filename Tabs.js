import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Platform, StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Homepg from './Homepg';
import Settings from './Settings';
import { Entypo, Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Tabs({navigation}) {
    return (
            <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: "tomato"
            }}
            >
                 <Tab.Screen 
                 name="Home" 
                 component={Homepg}
                 options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color,size }) => (
                        <Entypo name="leaf" size={24} color="tomato" />
                    ),
                 }}
                 />
                 <Tab.Screen 
                 name="Settings" 
                 component={Settings} 
                 options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="settings" size={24} color="tomato" />
                    ),
                }}
                />
            </Tab.Navigator>
    );
}

