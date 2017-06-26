import React from "react";
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import {palette} from "../constants/colors";



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});


export const Button = (props) =>
  <TouchableOpacity
    style={[styles.container, props.style, {backgroundColor: props.color || palette.accentColor}]}
    onPress={props.onPress}>
    <View style={styles.container}>
      {props.children}
    </View>
  </TouchableOpacity>;