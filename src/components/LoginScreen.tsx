import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontFamily, Generic } from '../styleSheets/styles';
import translation from '../language/translations';
import { gql, useMutation, makeVar } from '@apollo/client';
/*TO-DO:
    - Font issue of password field
    - Code cleaning and Commenting
    - login delay token empty issue
*/
const loginQuery = gql`
    mutation  signInStudent($login: String!, $password: String!) {
        signInStudent(login: $login, password: $password) {
            token
        }
    }
`;

interface stateAttr {
    icon: string,
    InputTypePassword: boolean,
    universityID: string,
    password: string
};
const language = translation.getLanguage();

const LoginScreen = () => {
    //
    const [state, setState] = useState<stateAttr>({
        icon: "eye-slash",
        InputTypePassword: true,
        errorMessage: "",
        universityID: "ut127",
        password: "12345678"
    })
    const [loginMutation, { error, loading, data }] = useMutation(loginQuery);

    const _handleSignIn = ({ universityID, password }) => {
        loginMutation({ variables: { login: universityID, password: password } })
            .then((result) => {
                AsyncStorage.setItem('token', result.data.signInStudent.token);
                const accessToken = makeVar(result.data.signInStudent.token);
                console.log(accessToken());
            });
    }

    const _changePassword = (password) => {
        setState({
            ...state,
            password
        })
    }

    const _changeUniversityID = (universityID) => {
        setState({
            ...state,
            universityID
        });
    }

    const _changeIcon = () => {

        setState({
            ...state,
            icon: state.icon === 'eye' ? 'eye-slash' : 'eye',
            InputTypePassword: !state.InputTypePassword
        });
    }
    return (
        <View style={styles.container}>
            <Text style={[styles.heading, FontFamily.arabicMedium]}>
                {translation.loginScreen.pageTitle}
            </Text>
            <View style={styles.universityIDInputBox}>
                <TextInput
                    keyboardType='numeric'
                    onChangeText={_changeUniversityID}
                    style={[styles.universityIDInputField, FontFamily.arabicRegular]}
                    placeholder={translation.loginScreen.universityIDInputPlaceholder} />
            </View>
            <View style={styles.passwordInputBox}>
                <View style={styles.passwordInputView}>
                    <Icon style={styles.passwordIconInput} onPress={_changeIcon} name={state.icon} size={22} color="#777d84" />
                    <TextInput
                        style={[styles.passwordInputField, FontFamily.arabicRegular]}
                        secureTextEntry={state.InputTypePassword}
                        onChangeText={_changePassword}
                        placeholder={translation.loginScreen.passwordInputPlaceholder} />
                </View>
            </View>
            <TouchableOpacity onPress={() => { console.log(AsyncStorage.getItem('token', data.signInStudent.token)) }}>
                <Text style={[styles.forgot, FontFamily.arabicRegular]} >{translation.loginScreen.forgotLink}</Text>
            </TouchableOpacity>
            <View style={styles.loginButtonView}>
                <TouchableOpacity onPress={() => _handleSignIn(state)} style={styles.loginButton}>
                    <Text style={[styles.loginButtonText, FontFamily.arabicMedium]}>{translation.loginScreen.loginButton}</Text>
                </TouchableOpacity>
            </View>
            {error ? <Text style={[Generic.errorMessage, FontFamily.arabicRegular]}>{state.errorMessage}</Text> : null}
            {loading ? <Text style={[Generic.errorMessage, FontFamily.arabicRegular]}>loading....</Text> : null}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        //width: 360,
        width: "100%",
        height: 741,
        backgroundColor: "#edf0f4",
        alignItems: "center",
        top: 114
    },
    heading: {
        //width: 127,
        width: '100%',
        height: 35,
        fontSize: 24,
        marginBottom: 62,
        color: "#50555a",
        textDecorationLine: "none",
        textDecorationStyle: "solid",
        textDecorationColor: "rgb(80, 85, 90)",
        textAlign: "center"
    },
    universityIDInputBox: {
        width: "100%",
        paddingRight: 26,
        paddingLeft: 26,
        marginBottom: 28
    },
    universityIDInputField: {
        //width: 308,
        width: "100%",
        height: 48,
        paddingTop: 0,
        paddingRight: 8,
        paddingBottom: 0,
        paddingLeft: 8,
        borderColor: "#b9c2cb",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 4,
        backgroundColor: "#ffffff",
        fontSize: 18,
        color: "#777d84",
        textDecorationLine: "none",
        textDecorationStyle: "solid",
        textDecorationColor: "rgb(119, 125, 132)",
        textAlign: (language == 'en') ? "left" : "right"
    },
    passwordInputBox: {
        width: "100%",
        paddingBottom: 10,
        paddingRight: 26,
        paddingLeft: 26,
        marginBottom: 22
    },
    passwordInputView: {
        //width: 308,
        width: "100%",
        height: 48,
        flexDirection: (language == 'en') ? "row-reverse" : "row",
        borderColor: "#b9c2cb",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 4,
        backgroundColor: "#ffffff",
        textDecorationLine: "none",
        textDecorationStyle: "solid",
        textDecorationColor: "rgb(119, 125, 132)",
    },
    passwordIconInput: {
        width: "15%",
        padding: 12
    },
    passwordInputField: {
        width: "85%",
        fontSize: 18,
        color: "#777d84",
        paddingTop: 0,
        paddingRight: 8,
        paddingBottom: 0,
        paddingLeft: 8,
        textAlign: (language == 'en') ? "left" : "right"
    },
    forgot: {
        //width: 126,
        width: '100%',
        height: 22,
        fontSize: 16,
        marginBottom: 28,
        color: "#777d84",
        textDecorationLine: "none",
        textDecorationStyle: "solid",
        textDecorationColor: "rgb(119, 125, 132)"
    },
    loginButton: {
        //width: 360,
        width: "100%",
        height: 47,
        borderRadius: 5,
        backgroundColor: "#50555a",
        paddingTop: 10,
        paddingBottom: 12,
    },
    loginButtonText: {
        color: "#ffffff",
        fontSize: 16,
        textDecorationLine: "none",
        textDecorationStyle: "solid",
        textDecorationColor: "rgb(255, 255, 255)",
        textAlign: "center"
    },
    loginButtonView: {
        width: "100%",
        paddingRight: 26,
        paddingLeft: 26
    }
});
export default LoginScreen; 