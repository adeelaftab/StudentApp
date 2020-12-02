import { gql, useQuery } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const HomeScreen = ({ navigation }) => {
    const _checkData = () => {
        navigation.navigate('ForgetPassword');
    }
    const _clearAsyncStorage = async () => {
        AsyncStorage.clear();
        console.log('clear Done')
    }
    return (
        <View style={styles.master}>
            <Text style={styles.header}>Tab1</Text>
            <Text style={{ fontSize: 28 }}>Welcome, 1</Text>
            <View >
                <TouchableOpacity onPress={() => _clearAsyncStorage()} style={{ fontSize: 28 }}>
                    <Text>testing</Text>
                </TouchableOpacity>
            </View>
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

export default HomeScreen;