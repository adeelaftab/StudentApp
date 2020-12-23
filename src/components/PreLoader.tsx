import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import translation from './../language/translations';
import {FontFamily} from './../styleSheets/styles';

const PreLoader = (props) => {
  const _renderLoader = () => {
    if (props.preLoaderVisible)
      return (
        <View style={styles.background}>
          <Image source={require('../../assets/images/loader.gif')} />
          <Text style={[styles.LoadingText, FontFamily.arabicMedium]}>
            {props.preLoadingText
              ? props.preLoadingText
              : translation.loadingScreen.loadingText}
          </Text>
        </View>
      );
    else return null;
  };
  return _renderLoader();
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ffffff',
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: 999999,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LoadingText: {
    width: '100%',
    height: 30,
    fontSize: 16,
    color: '#50555a',
    // marginTop: 28,
    textDecorationLine: 'none',
    textDecorationStyle: 'solid',
    textDecorationColor: 'rgb(80, 85, 90)',
    textAlign: 'center',
  },
});
export default PreLoader;
