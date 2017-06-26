import React, {ReactElement} from 'react';
import {View} from 'react-native';
import {TruckListScreen} from './screens/TruckList/TruckListScreen';
import {globalStyles} from './styles/globalStyles';
import {TruckFormScreen} from "./screens/TruckForm/TruckFormScreen";
import {connect} from "react-redux";


const _Main  = ({isOnList})  =>
  <View style={globalStyles.container}>
    {isOnList ?
      <TruckListScreen />
      :
      <TruckFormScreen />
    }
  </View>;

const mapStateToProps = ({ui: {isOnList}}) => ({
  isOnList
});

export const Main = connect(mapStateToProps, null)(_Main);
