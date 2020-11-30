import React, { useEffect, useContext } from 'react';
import { gql, useQuery } from "@apollo/client";
import AsyncStorage from '@react-native-async-storage/async-storage';

const QUERY = gql`
query accessToken {
  accessToken @client
}
`;

const AuthScreen = ({ navigation }) => {

    const { data: currentData } = useQuery(QUERY);
    useEffect(() => {
        AsyncStorage.getItem('token').then(function (result) {
            const token = result;
            console.log(token);
            if (token) {
                //Verify Token
                navigation.navigate('Home');
            }
            else {
                navigation.navigate('Login');
            }
        });


    }, []);
    return null;
}
export default AuthScreen;