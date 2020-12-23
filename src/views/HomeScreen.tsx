import React, {useEffect} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FontFamily, Generic} from '../styleSheets/styles';
import translation from '../language/translations';
import {gql, useMutation} from '@apollo/client';
import PreLoader from './../components/PreLoader';
import {useOfflineMutation} from 'react-offix-hooks';
import RoundIconButton from '../components/RoundIconButton';
import ClassMeetings from '../components/ClassMeetings';

const Announcement = false;
const HomeScreen = ({navigation}) => {
  const _clearAsyncStorage = async () => {
    AsyncStorage.clear();
  };
  useEffect(() => {
    if (Announcement) {
      navigation.navigate('AnnouncementScreen');
    }
  }, [Announcement]);

  return (
    <View style={styles.Container}>
      <View style={styles.TopHeader}>
        <View style={styles.IconHeader}>
          <RoundIconButton style={styles.RoundIconButton} name={'bell'} />
          <RoundIconButton
            style={styles.RoundIconButton}
            name={'comment-alt-lines'}
          />
          <RoundIconButton
            style={styles.RoundIconButton}
            name={'calendar-alt'}
          />
        </View>
        <View style={styles.LogoHeader}>
          <Image
            style={styles.LogoImage}
            source={require('../../assets/images/logo.png')}
          />
        </View>
      </View>
      <Text style={[styles.TitleHeader, FontFamily.arabicRegular]}>
        {translation.HomeScreen.TitleHeader}
      </Text>
      <ClassMeetings type={`new`} />
      <View>
        <TouchableOpacity
          onPress={() => _clearAsyncStorage()}
          style={{fontSize: 28}}>
          <Text>testing</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#edf0f4',
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  TopHeader: {flexDirection: 'row'},
  IconHeader: {flexDirection: 'row', width: '70%'},
  LogoHeader: {flexDirection: 'row-reverse', width: '30%'},
  RoundIconButton: {
    marginRight: 14,
  },
  LogoImage: {
    width: 50,
    height: 50,
    flexDirection: 'row',
  },
  TitleHeader: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 13,
    color: `#777d84`,
    textDecorationLine: 'none',
    textDecorationStyle: 'solid',
    textDecorationColor: 'rgb(119, 125, 132)',
    textAlign: `right`,
  },
});

export default HomeScreen;
