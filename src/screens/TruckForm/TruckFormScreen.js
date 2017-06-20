import React, {Component} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";


import {Button} from "../../components/Button";
import {globalStyles} from "../../styles/globalStyles";
import {Banner} from "../../components/Banner";
import {ITruck} from "../../types/entites";
import {addTruck} from "../../actions/trucks";
import {connect} from "react-redux";
import {switchScreens} from "../../actions/ui";

const styles = StyleSheet.create({
  button: {
    margin: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  }
});

class _TruckFormScreen extends Component {
  state = {
    name: ''
  };

  update = (text, name) => {
    this.setState({[name]: text});
  };

  render() {
    return (
      <View style={globalStyles.container}>
        <Banner />
        <View style={{flex: 3, padding: 5}}>
          <Text>Choose a name for your truck</Text>
          <TextInput
            style={{height: 60}}
            placeholder="truck name"
            value={this.state.name}
            onChangeText={text => this.update(text, "name")}/>
          <Button
            style={styles.button}
            onPress={() => {
              if (!this.state.name.trim()) {
                return;
              }
              this.props.addTruck({...this.state, active: true});
              this.props.switchScreens();
            }}>
            <Text style={styles.buttonText}>Add</Text>
          </Button>
          <Button
            style={styles.button}
            color={"tomato"}
            onPress={this.props.switchScreens}>
            <Text style={styles.buttonText}>Cancel</Text>
          </Button>
        </View>
        <View style={{flex: 7}}/>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addTruck: truck => dispatch(addTruck(truck)),
  switchScreens: () => dispatch(switchScreens('list'))
});

export const TruckFormScreen = connect(null, mapDispatchToProps)(_TruckFormScreen);
