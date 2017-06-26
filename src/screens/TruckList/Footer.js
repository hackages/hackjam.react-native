import React, {ReactElement} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {connect} from 'react-redux';

import {palette} from '../../constants/colors';
import {CounterWidget} from './CounterWidget';

export const _Footer = ({trucks = []}) => {
  const actives = trucks.filter(truck => truck.active).length;
  const inActives = trucks.filter(truck => !truck.active).length;

  return (
    <View style={styles.container}>
      <CounterWidget number={inActives} name="Actives" />
      <CounterWidget number={actives} name="Inactives" />
      <CounterWidget number={actives + inActives} name="Total" />
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

// TODO: return an object that contains the trucks on the key trucks
const mapStateToProps = () => ({});

export const Footer = connect(mapStateToProps)(_Footer);
