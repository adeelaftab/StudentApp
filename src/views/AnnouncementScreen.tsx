import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import translation from './../language/translations';
import {FontFamily} from './../styleSheets/styles';
const language = translation.getLanguage();

const AnnouncementScreen = ({navigation}) => {
  const _renderAnnouncement = () => {
    const _handleAnnouncement = () => {
      navigation.navigate('Home');
    };
    return (
      <View style={AnnouncementStyles.background}>
        <View style={AnnouncementStyles.headingView}>
          <Text style={[AnnouncementStyles.heading, FontFamily.arabicRegular]}>
            {translation.AnnouncementScreen.pageTitle}
          </Text>
        </View>
        <ScrollView style={AnnouncementStyles.MessageTextView}>
          <Text
            style={[AnnouncementStyles.MessageText, FontFamily.arabicRegular]}>
            {translation.AnnouncementScreen.MessageText}
          </Text>
        </ScrollView>
        <TouchableOpacity
          onPress={_handleAnnouncement}
          style={AnnouncementStyles.ConfirmButton}>
          <Text
            style={[
              AnnouncementStyles.ConfirmButtonText,
              FontFamily.arabicRegular,
            ]}>
            {translation.AnnouncementScreen.ButtonText}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return _renderAnnouncement();
};
const AnnouncementStyles = StyleSheet.create({
  background: {
    backgroundColor: '#ffffff',
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    alignItems: 'center',
  },
  headingView: {
    width: '100%',
    height: 60,
    marginTop: 48,
    marginBottom: 34,
    paddingRight: 76,
    paddingLeft: 76,
  },
  heading: {
    fontSize: 20,
    color: '#50555a',
    textDecorationLine: 'none',
    textDecorationStyle: 'solid',
    textDecorationColor: 'rgb(80, 85, 90)',
    textAlign: 'center',
    flexDirection: 'row',
  },
  MessageTextView: {
    width: '100%',
    height: 60,
    marginBottom: 44,
    paddingRight: 28,
    paddingLeft: 28,
  },
  MessageText: {
    width: '100%',
    fontSize: language == 'en' ? 15 : 17,
    marginBottom: 28,
    color: '#777d84',
    textDecorationLine: 'none',
    textDecorationStyle: 'solid',
    textDecorationColor: 'rgb(119, 125, 132)',
  },
  ConfirmButton: {
    width: '100%',
    height: 52,
    backgroundColor: '#50555a',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ConfirmButtonText: {
    color: '#ffffff',
    fontSize: 16,
    textDecorationLine: 'none',
    textDecorationStyle: 'solid',
    textDecorationColor: 'rgb(255, 255, 255)',
    textAlign: 'center',
  },
});
export default AnnouncementScreen;
