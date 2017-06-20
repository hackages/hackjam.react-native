import React from "react";
import {StyleSheet, View} from "react-native";
import {palette} from "../constants/colors";

export const Banner = () => <View style={styles.status}/>;

const styles = StyleSheet.create({
  status: {
    height: 20,
    backgroundColor: palette.darkPrimaryColor
  }
});
