import React, {useEffect} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FontFamily, Generic} from '../styleSheets/styles';
import translation from '../language/translations';
import {gql, useMutation} from '@apollo/client';
import PreLoader from './../components/PreLoader';
import {useOfflineMutation} from 'react-offix-hooks';
import RoundIconButton from '../components/RoundIconButton';
import ClassMeetings from '../components/ClassMeetings';
import Course from '../components/Course';

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
    <ScrollView style={styles.Container}>
      <View style={styles.TopHeader}>
        <View style={styles.IconHeader}>
          <RoundIconButton style={styles.RoundIconButton} name={'faBell'} />
          <RoundIconButton
            style={styles.RoundIconButton}
            name={'faCommentAlt'}
          />
          <RoundIconButton
            style={styles.RoundIconButton}
            name={'faCalendarAlt'}
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
      <ClassMeetings />
      <View style={styles.ViewAllView}>
        <TouchableOpacity
          style={[styles.ViewAllButton, FontFamily.arabicRegular]}
          onPress={() => _clearAsyncStorage()}>
          <Text style={[styles.ViewAllButtonText, FontFamily.arabicRegular]}>
            {translation.HomeScreen.ViewAllButtonText}
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.Title2ndHeader, FontFamily.arabicRegular]}>
        {translation.HomeScreen.TitleHeader}
      </Text>
      <View>
        <Course customStyle={{marginBottom: 10}} status={`active`} />
        <Course customStyle={{marginBottom: 10}} />
        <Course customStyle={{marginBottom: 10}} />
        <Course customStyle={{marginBottom: 20}} />
      </View>
    </ScrollView>
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
    width: 40,
    height: 40,
    flexDirection: 'row',
  },
  TitleHeader: {
    width: `100%`,
    marginTop: 20,
    marginBottom: 5,
    fontSize: 13,
    color: `#777d84`,
    textDecorationLine: 'none',
    textDecorationStyle: 'solid',
    textDecorationColor: 'rgb(119, 125, 132)',
    textAlign: `right`,
  },
  ViewAllView: {
    marginTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  ViewAllButton: {
    width: 141,
    height: 27,
    borderWidth: 1,
    borderStyle: `solid`,
    borderColor: `#b9c2cb`,
    borderRadius: 40,
    backgroundColor: `#ffffff`,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  ViewAllButtonText: {
    fontSize: 14,
    color: `#50555a`,
    textDecorationLine: 'none',
    textDecorationStyle: 'solid',
    textDecorationColor: 'rgb(80, 85, 90)',
  },
  Title2ndHeader: {
    width: `100%`,
    marginBottom: 5,
    fontSize: 13,
    color: `#777d84`,
    textDecorationLine: 'none',
    textDecorationStyle: 'solid',
    textDecorationColor: 'rgb(119, 125, 132)',
    textAlign: `right`,
  },
});

export default HomeScreen;
