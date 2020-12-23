import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from "@react-native-async-storage/async-storage";
// import NetInfo from "@react-native-community/netinfo"
import { ApolloOfflineClient } from "offix-client";
import { ReactNativeNetworkStatus } from './ReactNativeNetworkStatus';

const cacheStorage = {
  getItem: async (key) => {
    const data = await AsyncStorage.getItem(key);
    if (typeof data === 'string') {
      //console.log("Get item string", data)
      return JSON.parse(data);
    }
   // console.log("Get item", data)
    return data;
  },
  setItem: (key, value) => {
    let valueStr = value;
    if (typeof valueStr === 'object') {
      valueStr = JSON.stringify(value);
    }
    //console.log("set item", valueStr)
    return AsyncStorage.setItem(key, valueStr);
  },
  removeItem: (key) => {
    return AsyncStorage.removeItem(key);
  }
};

const networkStatus = new ReactNativeNetworkStatus();

const httpLink = createHttpLink({
  uri: 'https://gql.el-css.edu.om/',
});

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('token')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      "x-access-token": token ? `${token}` : "",
    }
  }
});

export const offlineClient = new ApolloOfflineClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
  offlineStorage: cacheStorage,
  cacheStorage,
  networkStatus
});