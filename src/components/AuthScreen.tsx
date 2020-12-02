import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { Text, View } from 'react-native'
import React, { useEffect, useContext } from 'react';
import PreLoader from '../PreLoader';
const StudentProfile = gql`
  query StudentProfile {
    studentProfile {
    id
    name
    mobile
  }
}`;
const AuthScreen = ({ navigation }) => {
  const { loading, error, data } = useQuery(StudentProfile)
  useEffect(() => {
    if (!loading) {
      if (error) {
        console.log("fError:", error.message)
        navigation.navigate("Login");
      }
      else {
        console.log("fDATA:", data)
        navigation.navigate("Home");
      }
    }
  }, [loading]);


  return (<View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}><PreLoader preLoaderVisible={true} /></View>);
}
export default AuthScreen;