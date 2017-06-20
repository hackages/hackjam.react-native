import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {palette} from "../../constants/colors";
import {globalStyles} from "../../styles/globalStyles";
import {HeaderWidget} from "./HeaderWidget";
import {IFilters, ITruck} from "../../types/entites";
import {appInfos} from "../../constants/appInfos";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.title}>{appInfos.appTitle}</Text>
      <HeaderWidget />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: palette.defaultPrimaryColor
  },
});
