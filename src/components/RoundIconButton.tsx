import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FontFamily, Generic} from '../styleSheets/styles';

const RoundIconButton = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.RoundButton, props.style]}
        accessibilityRole="button">
        <Icon
          style={styles.ButtonIcon}
          name={props.name}
          size={22}
          color="#50555a"
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
