import {StyleSheet, ViewStyle} from 'react-native';
import {palette} from '../constants/colors';

export const globalStyles = StyleSheet.create({

  container: {
    flex: 1
  },

  title: {
    color: palette.textPrimaryColor,
  },

  widget: {
    padding: 14,
    backgroundColor: palette.accentColor
  }

});
