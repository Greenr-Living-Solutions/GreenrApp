import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, ScrollView } from 'react-native';

var socket = new WebSocket("ws://192.168.1.68:8000");

socket.onopen = function(event) {
}



export default function SignUp({navigation}) {
 
    const [username, usernameInput] = React.useState('sustainablejoe');
    const [password, passwordInput] = React.useState('*****');
    const [passwordtwo, passwordtwoInput] = React.useState('*****');
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
                <Text style={styles.welcomeFont}>
                    Ready to take the next step?
                </Text>
                <View style= {styles.space}/>
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
               <Text style={styles.logoSubtitleFont}>
                   re-type password
               </Text>
               <TextInput
               style={{ height: 40, borderColor: 'tomato', borderWidth: 2 }}
               onChangeText={text => passwordtwoInput(text)}
               value={passwordtwo}
               />
               <View style= {{
                   flex: 1,
                   flexDirection: 'row'
               }}>
                   <Button
                    color = 'tomato'
                    title = 'sign up'
                    onPress = {() => {
                        if (password != passwordtwo) {
                            Alert.alert(
                                "Whoopsie!",
                                "Your passwords don't match. Please try again.",
                                [
                                  {
                                    text: "Cancel",
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "cancel"
                                  },
                                ],
                                { cancelable: false }
                              );
                        }
                        else {
                            socket.send(username + " " + password);
                            Alert.alert(
                                "Congratulations!",
                                "Login with your newly-made credentials and you will be on your way.",
                                [
                                  {
                                    text: "Let's go!",
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "cancel"
                                  },
                                ],
                                { cancelable: false }
                              );
                            navigation.navigate('LoginScreen')
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
    },
    welcomeFont: {
        fontSize: 40,
        fontFamily: 'AppleSDGothicNeo-Light',
        color: 'lightblue',
    },
    space: {
        flex: .25,
    },
})

