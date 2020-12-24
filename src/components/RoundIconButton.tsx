import * as React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconName} from '@fortawesome/fontawesome-svg-core';
import {
  faCalendarAlt,
  faCommentAlt,
  faBell,
} from '@fortawesome/free-solid-svg-icons';
const val = {
  faBell: faBell,
  faCommentAlt: faCommentAlt,
  faCalendarAlt: faCalendarAlt,
};

const RoundIconButton = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.RoundButton, props.style]}
        accessibilityRole="button">
        <FontAwesomeIcon
          style={styles.ButtonIcon}
          icon={val[props.name] as IconName}
          size={22}
          color={'#50555a'}
        />
      </TouchableOpacity>
    </View>
  );
};
export default RoundIconButton;

const styles = StyleSheet.create({
  RoundButton: {
    width: 40,
    height: 40,
    borderRadius: 60,
    backgroundColor: `#ffffff`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonIcon: {color: '#50555a', textAlign: 'center'},
});
