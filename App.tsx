import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloProvider } from '@apollo/client';
import { ApolloOfflineProvider } from 'react-offix-hooks';
import { offlineClient } from './src/offix';
// Components
import LoginScreen from './src/components/LoginScreen';
import HomeScreen from './src/components/HomeScreen';
import AuthScreen from './src/components/AuthScreen';
import ForgetPasswordScreen from './src/components/ForgetPasswordScreen';
import { useEffect, useState } from 'react';
import PreLoader from './src/PreLoader';

const Stack = createStackNavigator();

// const httpLink = createHttpLink({
//   uri: 'https://gql.el-css.edu.om/',
// });

// const client = new ApolloClient({
//   uri: 'https://gql.el-css.edu.om/',
//   cache: clientCache,
// });
// const authLink = setContext(async (_, { headers }) => {
//   const token = await AsyncStorage.getItem('token')
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       "x-access-token": token ? `${token}` : "",
//     }
//   }
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache()
// });

const App = () => {
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    offlineClient.init().then(() => setInitialized(true))
  }, []);
   // load the app if the apolloClient is there, otherwise load a loading screen
   if (initialized) {
    return (
      <ApolloOfflineProvider client={offlineClient}>
        <ApolloProvider client={offlineClient}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="AuthScreen">
              <Stack.Screen name="AuthScreen" component={AuthScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
              <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
          </NavigationContainer>
        </ApolloProvider >
      </ApolloOfflineProvider>
    )
  }
  return <PreLoader preLoaderVisible={true} />
  
};

export default App; 