import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FontFamily, Generic} from '../styleSheets/styles';

const ClassMeetings = (props) => {
  return (
    <View>
      <View style={styles.MainView}>
        <View style={styles.LeftView}>
          <Text
            style={[styles.ViewText, FontFamily.arabicRegular, {fontSize: 12}]}>
            الدروس
          </Text>
          <Text
            style={[styles.ViewText, FontFamily.arabicRegular, {fontSize: 14}]}>
            6 . 7 . 8 . 9 . 10
          </Text>
        </View>
        <View style={styles.RightView}>
          <View style={{width: `70%`}}>
            <Text
              style={[
                styles.ViewText,
                FontFamily.arabicRegular,
                {fontSize: 14},
              ]}>
              الصرف والإملاء
            </Text>
            <Text
              style={[
                styles.ViewText,
                FontFamily.arabicRegular,
                {fontSize: 12},
              ]}>
              اللقاء الثاني
            </Text>
          </View>
          <View style={{width: `30%`, flexDirection: 'row-reverse'}}>
            <Image
              style={styles.UserImage}
              source={require('../../assets/images/box.png')}
            />
          </View>
        </View>
      </View>
      <View style={styles.Button}>
        <Text style={[styles.ButtonText, FontFamily.arabicRegular]}>
          باقي 5 ساعات | 10 صباحا
        </Text>
      </View>
    </View>
  );
};
export default ClassMeetings;

const styles = StyleSheet.create({
  MainView: {
    width: `100%`,
    height: 74,
    backgroundColor: `#ffffff`,
    flexDirection: 'row',
    borderWidth: 1,
    borderStyle: `solid`,
    borderColor: `#b9c2cb`,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  LeftView: {
    width: '40%',
    paddingTop: 16,
    paddingBottom: 16,
  },
  RightView: {
    width: '60%',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 16,
    paddingBottom: 16,
    flexDirection: 'row',
  },
  ViewText: {
    color: `#000000`,
    textDecorationLine: 'none',
    textDecorationStyle: 'solid',
    textDecorationColor: 'rgb(0, 0, 0)',
    textAlign: `right`,
  },
  UserImage: {
    width: 40,
    height: 40,
    borderRadius: 70,
    backgroundColor: `#dadada`,
  },
  Button: {
    width: `100%`,
    height: 38,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: `#232629`,
    textDecorationLine: 'none',
    textDecorationStyle: 'solid',
    textDecorationColor: 'rgb(255, 255, 255)',
    justifyContent: 'center',
  },
  ButtonText: {
    color: `#ffffff`,
    fontSize: 14,
    textAlign: `center`,
  },
});
