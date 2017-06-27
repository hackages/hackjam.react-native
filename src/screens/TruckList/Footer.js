import React, {ReactElement} from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {connect} from 'react-redux';

import {palette} from '../../constants/colors'
import {CounterWidget} from './CounterWidget';


export const _Footer = ({trucks}) => {
  const actives = trucks.filter(truck => truck.active).length;
  const inActives = trucks.filter(truck => !truck.active).length;

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

const mapStateToProps = ({trucks}) => ({trucks});

export const Footer = connect(mapStateToProps, null)(_Footer);
