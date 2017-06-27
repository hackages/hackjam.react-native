import React, {ReactElement} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ViewStyle, TextStyle} from 'react-native';
import {ListView} from '@shoutem/ui';
import {Entypo} from '@expo/vector-icons';
import { EFilter, filters } from "../../types/entites";
import {Banner} from '../../components/Banner';
import {globalStyles} from '../../styles/globalStyles';
import {Footer} from './Footer';
import {Header} from './Header';
import { Button } from '../../components/Button';
import {connect} from "react-redux";
import {toggleTruck} from "../../actions/trucks";
import {switchScreens} from "../../actions/ui";

const styles = StyleSheet.create({
  rowContainer: {
    backgroundColor: 'white',
    padding: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
  }, row: {
    fontSize: 20,
  }
});

const filtring = {
  [EFilter.NONE]: (trucks) => trucks,
  [EFilter.ACTIVE]: (trucks) => trucks.filter(truck => truck.active),
  [EFilter.INACTIVE]: (trucks) => trucks.filter(truck => !truck.active),
};

const _TruckListScreen = ({trucks, switchScreens, filter, toggleTruck}) => {

  let filteredList = filtring[filters.indexOf(filter)](trucks);

  const renderRow = (truck) => (
    <TouchableOpacity style={styles.rowContainer} onPress={() => toggleTruck(truck)}>
      <Text style={styles.row}>{truck.name}</Text>
      {truck.active && <Entypo name="check" size={20}/>}
    </TouchableOpacity>
  );

  return (
    <View style={globalStyles.container}>
      <Banner />
      <Header />
      <View style={{flex:7.5}}>
        <ListView
          data={filteredList}
          renderRow={renderRow}
        />
      </View>
      <View style={{flex: 0.5}}>
        <Button
          onPress={switchScreens}>
          <Text style={{fontSize: 20, color: 'white'}}>Add a truck</Text>
          <Entypo name="circle-with-plus" size={20} color='white'/>
        </Button>
      </View>
      <Footer />
    </View>
  );
};

const mapStateToProps = ({trucks, filter}) => ({
  trucks,
  filter,
});

const mapDispatchToProps = (dispatch) => ({
  toggleTruck: (truck) => dispatch(toggleTruck(truck)),
  switchScreens: () => dispatch(switchScreens()),
});

export const TruckListScreen = connect(mapStateToProps, mapDispatchToProps)(_TruckListScreen);
