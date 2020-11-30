

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/components/LoginScreen';
import HomeScreen from './src/components/HomeScreen';
import AuthScreen from './src/components/AuthScreen';
import ForgetPasswordScreen from './src/components/ForgetPasswordScreen';
import { clientCache } from './src/cache';
import { ApolloClient, ApolloProvider, gql, useQuery } from '@apollo/client';
const Stack = createStackNavigator();
// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://gql.el-css.edu.om/',
  cache: clientCache
});//options={{ headerShown: false }}


const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AuthScreen">
          <Stack.Screen name="AuthScreen" component={AuthScreen} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider >
  )
};

export default App; 