import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const ForgetPasswordScreen = () => {
    AsyncStorage.removeItem('token')
    return (
        <View style={styles.master}>
            <Text style={styles.header}>ForgetPasswordScreen</Text>
            <Text style={{ fontSize: 28 }}>Welcome, ForgetPasswordScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    master: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 32,
    },
});

export default ForgetPasswordScreen;