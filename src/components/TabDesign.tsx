import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FontFamily, Generic} from '../styleSheets/styles';
import translation from '../language/translations';
const language = translation.getLanguage();

const CustomDesign = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{flexDirection: language == 'en' ? 'row-reverse' : 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            activeOpacity={1}
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={
              isFocused
                ? [styles.TabStyle, styles.ActiveTabStyle]
                : styles.TabStyle
            }>
            <Icon
              style={{
                textAlign: 'center',
              }}
              name={options.tabBarBadge}
              size={22}
              color="#50555a"
            />
            <Text
              style={[
                {
                  color: '#50555a',
                  textAlign: 'center',
                  fontSize: 12,
                },
                FontFamily.arabicRegular,
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  TabStyle: {
    backgroundColor: '#ffffff',
    color: '#50555a',
    paddingTop: 5,
    textAlign: 'center',
    borderColor: '#b9c2cb',
    borderStyle: 'solid',
    borderWidth: 1,
    flex: 1,
  },
  ActiveTabStyle: {borderTopColor: 'black', borderTopWidth: 2},
});
export default CustomDesign;
