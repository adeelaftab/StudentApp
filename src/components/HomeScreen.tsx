import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { authService } from '../services/authService';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.master}>
            <Text style={styles.header}>Tab1</Text>
            <Text style={{ fontSize: 28 }}>Welcome, 1</Text>
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