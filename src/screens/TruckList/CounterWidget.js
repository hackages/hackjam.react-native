import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {palette} from "../../constants/colors";

export const CounterWidget = ({number, name}) => (
  <View style={styles.container}>
    <Text style={styles.counter}>
      {number}
    </Text>
    <Text style={styles.counterText}>
      {name}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  counter: {
    fontSize: 32,
    color: palette.textPrimaryColor,
  },

  counterText: {
    color: palette.lightPrimaryColor,
  }
});
