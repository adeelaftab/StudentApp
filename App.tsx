

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/components/LoginScreen';
import HomeScreen from './src/components/HomeScreen';
import { authService } from './src/services/authService';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const Stack = createStackNavigator();
// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://gql.el-css.edu.om/',
  cache: new InMemoryCache()
});
console.log(authService(), 1);
const App = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </ApolloProvider >
);

export default App; 