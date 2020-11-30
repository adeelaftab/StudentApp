import AsyncStorage from '@react-native-async-storage/async-storage';
import { gql, useQuery } from '@apollo/client';
const PROFILE_QUERY = gql`
  query CurrentUserForLayout {
    studentProfile {
        id
    }
  }
`;
const { client, error, loading, data } = useQuery(PROFILE_QUERY,
    { fetchPolicy: "network-only" });
export const authService = async ({ navigate }) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        if (error) {
            return <p className="navbar-text navbar-right">Loading...</p>;
        }
        else {
            if (data.studentProfile.id) {

            }
        }
        return true;
    }
    else {
        return false;
    }
};
