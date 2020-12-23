import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ApolloProvider} from '@apollo/client';
import {ApolloOfflineProvider} from 'react-offix-hooks';
import {offlineClient} from './src/config/offix';
// Components
import LoginScreen from './src/views/LoginScreen';
import HomeScreen from './src/views/HomeScreen';
import AuthScreen from './src/views/AuthScreen';
import ForgetPasswordScreen from './src/views/ForgetPasswordScreen';
import {useEffect, useState} from 'react';
import PreLoader from './src/components/PreLoader';
import CustomDesign from './src/components/TabDesign';
import AnnouncementScreen from './src/views/AnnouncementScreen';
import translation from './src/language/translations';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();
function ProfileScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>ProfileScreen!</Text>
    </View>
  );
}

function ExamScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>ExamScreen!</Text>
    </View>
  );
}
function DiscussionScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>DiscussionScreen!</Text>
    </View>
  );
}

function HomeTabsNavigator() {
  return (
    <BottomTabs.Navigator
      tabBar={(props) => <CustomDesign {...props} />}
      initialRouteName="Home">
      <BottomTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarBadge: 'bars',
          tabBarLabel: translation.navigationTabs.moreScreen,
        }}
      />
      <BottomTabs.Screen
        name="Exams"
        component={ExamScreen}
        options={{
          tabBarLabel: translation.navigationTabs.examScreen,
          tabBarBadge: 'check-circle',
        }}
      />
      <BottomTabs.Screen
        name="Discussion"
        component={DiscussionScreen}
        options={{
          tabBarLabel: translation.navigationTabs.discussionScreen,
          tabBarBadge: 'comments',
        }}
      />
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: translation.navigationTabs.homeScreen,
          tabBarBadge: 'home',
        }}
      />
    </BottomTabs.Navigator>
  );
}

const App = () => {
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    offlineClient.init().then(() => setInitialized(true));
  }, []);
  if (initialized) {
    return (
      <ApolloOfflineProvider client={offlineClient}>
        <ApolloProvider client={offlineClient}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="AuthScreen">
              <Stack.Screen
                name="AuthScreen"
                component={AuthScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ForgetPassword"
                component={ForgetPasswordScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="HomeTabs"
                component={HomeTabsNavigator}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="AnnouncementScreen"
                component={AnnouncementScreen}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ApolloProvider>
      </ApolloOfflineProvider>
    );
  }
  return <PreLoader preLoaderVisible={true} />;
};

export default App;
