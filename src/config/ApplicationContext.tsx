import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IToken {
  loading: boolean;
  token: string;
}

const getToken = (): IToken => {
  const [token, setToken] = useState<string>(``);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem('token');
      setToken(token);
      setLoading(false);
    };
    getToken();
  }, []);

  return {token, loading};
};

export default getToken;
