import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput, Alert, ScrollView } from 'react-native';

var socket = new WebSocket("ws://192.168.1.68:8000");

socket.onopen = function(event) {
}


export default function Login({navigation}) {
    
    const [username, usernameInput] = React.useState('sustainablejoe');
    const [password, passwordInput] = React.useState('*****');
    return (
       <View style={styles.background}>
           <ScrollView>
           <View style={styles.button}>
                <Button
                    color = 'tomato'
                    title = 'go back'
                    onPress = {() => navigation.navigate('WelcomeScreen')}
                />
           </View>
           
           <View style={styles.textContainer}>
               <Text style={styles.logoSubtitleFont}>
                   username
               </Text>
               <TextInput 
                style={{ height: 40, borderColor: 'tomato', borderWidth: 2 }}
                onChangeText={text => usernameInput(text)}
                value={username}
               />
               <Text style={styles.logoSubtitleFont}>
                   password
               </Text>
               <TextInput 
                style={{ height: 40, borderColor: 'tomato', borderWidth: 2 }}
                onChangeText={text => passwordInput(text)}
                value={password}
               />
               <View style= {{
                   flex: 1,
                   flexDirection: 'row'
               }}>
                   <Button
                    color = 'tomato'
                    title = 'login'
                    onPress = {() => {
                        socket.send("Login " + username + " " + password)
                        socket.onmessage = (event) => {
                            if (event.data == "True") {
                                navigation.navigate("Home");
                            }
                            else if (event.data == "False") {
                                Alert.alert(
                                    "Whoopsie!",
                                    "Looks like that user doesn't exist. Please try again.",
                                    [
                                      {
                                        text: "ok :(",
                                        onPress: () => console.log("Cancel Pressed"),
                                        style: "cancel"
                                      },
                                    ],
                                    { cancelable: false }
                                  );
                            }
                        }
                    }}
                />

               </View>
           </View>
           </ScrollView>
       </View>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logoSubtitleFont: {
        fontFamily: 'AppleSDGothicNeo-Light',
        fontSize: 20,
    },
    textContainer: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        top: '10%',
        marginHorizontal: '10%',
      },
    button: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        top: '5%',
        marginLeft: "10%",
    }
})
