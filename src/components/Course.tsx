import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FontFamily, Generic} from '../styleSheets/styles';
import ProgressCircle from 'react-native-progress-circle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCommentAlt} from '@fortawesome/free-solid-svg-icons';
const Course = (props) => {
  return (
    <View style={props.customStyle}>
      <View style={styles.MainView}>
        <View style={styles.LeftView}>
          <Text style={[styles.ViewTitleText, FontFamily.arabicRegular]}>
            تاريخ عمان والحضارة الإسلامية
          </Text>
          <Text style={[styles.ViewDescText, FontFamily.arabicRegular]}>
            20 درس | 6 لقاءات مباشرة
          </Text>
        </View>
        <View style={styles.RightView}>
          <ProgressCircle
            percent={30}
            radius={45}
            borderWidth={3}
            color="white"
            shadowColor="#009ee0"
            bgColor="#009ee0"
            containerStyle={styles.cout}
            outerCircleStyle={styles.out}>
            <Text style={[styles.innerText, FontFamily.arabicRegular]}>
              شاهدت
            </Text>
            <Text style={[styles.innerText2, FontFamily.arabicRegular]}>
              20/11
            </Text>
          </ProgressCircle>
        </View>
      </View>
      <View style={styles.Footer}>
        <View style={{width: `40%`}}>
          <Text style={[styles.ButtonText, FontFamily.arabicRegular]}>
            يغلق بعد 5 أيام
          </Text>
        </View>
        <View style={{flexDirection: 'row', width: `60%`}}>
          <View style={{width: `80%`}}>
            <Text style={[styles.ButtonText2, FontFamily.arabicRegular]}>
              واجب منتدى النقاش
            </Text>
          </View>
          <View style={{width: `20%`}}>
            <TouchableOpacity
              style={[styles.CommentIcon, FontFamily.arabicRegular]}
              accessibilityRole="button">
              <FontAwesomeIcon
                style={styles.ButtonIcon}
                icon={faCommentAlt}
                size={22}
                color={'#50555a'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Course;

const styles = StyleSheet.create({
  MainView: {
    width: `100%`,
    height: 107,
    backgroundColor: `#ffffff`,
    flexDirection: 'row',
    borderWidth: 1,
    borderStyle: `solid`,
    borderColor: `#b9c2cb`,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  LeftView: {
    width: '65%',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
  },
  RightView: {
    width: '35%',
    paddingTop: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    backgroundColor: `#009ee0`,
    opacity: 0.84,
    textAlign: `center`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cout: {
    backgroundColor: '#009ee0',
    borderWidth: 3,
    borderStyle: `solid`,
    borderColor: `white`,
  },
  out: {
    backgroundColor: '#009ee0',
  },
  innerText: {
    fontSize: 12,
    color: `#ffffff`,
    textDecorationLine: 'none',
    textDecorationStyle: 'solid',
    textDecorationColor: 'rgb(255, 255, 255)',
    lineHeight: 22,
    textAlign: `center`,
  },
  innerText2: {
    fontSize: 14,
    color: `#ffffff`,
    textDecorationLine: 'none',
    textDecorationStyle: 'solid',
    textDecorationColor: 'rgb(255, 255, 255)',
    lineHeight: 22,
    textAlign: `center`,
  },
  ViewTitleText: {
    color: `#000000`,
    textDecorationLine: 'none',
    textDecorationStyle: 'solid',
    textDecorationColor: 'rgb(0, 0, 0)',
    textAlign: `right`,
    fontSize: 14,
  },
  ViewDescText: {
    color: `#777d84`,
    textDecorationLine: 'none',
    textDecorationStyle: 'solid',
    textDecorationColor: 'rgb(0, 0, 0)',
    textAlign: `right`,
    fontSize: 12,
  },
  Footer: {
    width: `100%`,
    height: 40,
    borderWidth: 1,
    borderStyle: `solid`,
    borderColor: `#b9c2cb`,
    borderTopColor: `transparent`,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: `#f2f5f7`,
    flexDirection: 'row',
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 7,
    paddingRight: 7,
  },
  ButtonText: {
    color: `#777d84`,
    fontSize: 14,
    textAlign: `left`,
  },
  ButtonText2: {
    color: `#50555a`,
    fontSize: 14,
    textAlign: `right`,
  },
  CommentIcon: {
    color: `#50555a`,
    fontSize: 14,
    textAlign: `right`,
    paddingRight: 5,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
