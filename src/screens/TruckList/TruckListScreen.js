import React from 'react';
import {StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import {ListView} from '@shoutem/ui';
import {Entypo} from '@expo/vector-icons';

import {Banner} from '../../components/Banner';
import {globalStyles} from '../../styles/globalStyles';
import {Footer} from './Footer';
import {Header} from './Header';
import {EFilter, filters} from '../../types/entites';
import {Button} from '../../components/Button';
import {connect} from 'react-redux';
import {toggleTruck} from '../../actions/trucks';
import {switchScreens} from '../../actions/ui';


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

const filtering = {
  [EFilter.NONE]: (trucks) => trucks,
  [EFilter.ACTIVE]: (trucks) => trucks.filter(truck => truck.active),
  [EFilter.INACTIVE]: (trucks) => trucks.filter(truck => !truck.active),
};

const _TruckListScreen = ({trucks = [], switchScreens, filter = filters[EFilter.NONE], toggleTruck}) => {

  let filteredList = filtering[filters.indexOf(filter)](trucks);

  const renderRow = (truck) => (
    <TouchableOpacity style={styles.rowContainer} onPress={() => alert('Oops')}>
      <Text style={styles.row}>{name}</Text>
      {truck.active && <Entypo name="check" size={20} />}
    </TouchableOpacity>
  );

  return (
    <View style={globalStyles.container}>
      <Banner />
      <Header />
      <View style={{flex: 7.5}}>
        <ListView
          data={filteredList}
          renderRow={renderRow}
        />
      </View>
      <View style={{flex: 0.5}}>
        <Button
          onPress={switchScreens}>
          <Text style={{fontSize: 20, color: 'white'}}>Add a truck</Text>
          <Entypo name="circle-with-plus" size={20} color='white' />
        </Button>
      </View>
      <Footer />
    </View>
  );
};

// TODO:
// This component should receive those props from the state
// trucks, filter
const mapStateToProps = () => ({

});

// TODO:
// return functions that dispatch the appropriate actions
const mapDispatchToProps = (dispatch) => ({
  toggleTruck: () => dispatch(),
  switchScreens: () => dispatch(),
});

export const TruckListScreen = connect(mapStateToProps, mapDispatchToProps)(_TruckListScreen);
