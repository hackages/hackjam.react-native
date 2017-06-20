import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ListView} from "@shoutem/ui";
import {Entypo} from "@expo/vector-icons";

import {Banner} from "../../components/Banner";
import {globalStyles} from "../../styles/globalStyles";
import {Footer} from "./Footer";
import {Header} from "./Header";
import {EFilter, filters, IFilters, ITruck} from "../../types/entites";
import {Button} from "../../components/Button";
import {connect} from "react-redux";
import {deleteTruck, getAllTrucks, toggleTruck} from "../../actions/trucks";
import {switchScreens} from "../../actions/ui";
import {IActivateTruckReducer} from "../../reducers/activeTrucks";

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }, row: {
    fontSize: 20,
  }
});

const filtring = {
  [EFilter.NONE]: trucks => trucks,
  [EFilter.ACTIVE]: trucks => trucks.filter(truck => truck.active),
  [EFilter.INACTIVE]: trucks => trucks.filter(truck => !truck.active),
};

class _TruckListScreen extends Component {

  renderRow = truck => (
    <View style={styles.rowContainer}>
      <TouchableOpacity style={{flexDirection: 'row', paddingRight: 50}} onPress={() => this.props.toggleTruck(truck)}>
        <Text style={styles.row}>{truck.name}</Text>
        {!!this.props.activeTrucks[truck.uuid] && <Entypo name="check" size={20}/>}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.deleteTruck(truck)}>
        <Entypo name="trash" color="tomato" size={20}/>
      </TouchableOpacity>
    </View>
  );

  componentDidMount() {
    this.props.getAllTrucks();
  }

  render() {
    const {trucks, switchScreens, filter, goToMap} = this.props;
    let filteredList = filtring[filter](trucks);
    return (
      <View style={globalStyles.container}>
        <Banner />
        <Header />
        <View style={{flex: 7.5}}>
          <ListView
            data={filteredList}
            renderRow={this.renderRow}
          />
        </View>
        <View style={{flex: 0.5}}>
          <Button
            onPress={goToMap}>
            <Text style={{fontSize: 20, color: 'white'}}>Go to map</Text>
            <Entypo name="circle-with-plus" size={20} color='white'/>
          </Button>
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
  }
}

const mapStateToProps = ({trucks, filter, activeTrucks}) => ({
  trucks: trucks.map(truck => ({...truck, active: activeTrucks[truck.uuid]})),
  filter,
  activeTrucks
});

const mapDispatchToProps = dispatch => ({
  toggleTruck: truck => dispatch(toggleTruck(truck)),
  switchScreens: () => dispatch(switchScreens('form')),
  goToMap: () => dispatch(switchScreens('map')),
  getAllTrucks: () => dispatch(getAllTrucks()),
  deleteTruck: truck => dispatch(deleteTruck(truck)),
});

export const TruckListScreen = connect(mapStateToProps, mapDispatchToProps)(_TruckListScreen);
