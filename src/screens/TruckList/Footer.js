import React from "react";
import {StyleSheet, View} from "react-native";
import {connect} from "react-redux";

import {palette} from "../../constants/colors";
import {CounterWidget} from "./CounterWidget";
import {ITruck} from "../../types/entites";

export const _Footer = ({trucks, activeTrucks}) => {
  const actives = trucks.filter(truck => activeTrucks[truck.uuid]).length;
  const inActives = trucks.filter(truck => !activeTrucks[truck.uuid]).length;

  return (
    <View style={styles.container}>
      <CounterWidget number={actives} name="Actives"/>
      <CounterWidget number={inActives} name="Inactives"/>
      <CounterWidget number={actives + inActives} name="Total"/>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: palette.defaultPrimaryColor
  },
});

const mapStateToProps = ({trucks, activeTrucks}) => ({trucks, activeTrucks});

export const Footer = connect(mapStateToProps, null)(_Footer);
