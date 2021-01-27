import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';

export default function Homepg({navigation}) {
    
    return (
        <View style={styles.background}>
            <ScrollView>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff',
    },
    chartContainer: {
        flex: 1,
    }
});