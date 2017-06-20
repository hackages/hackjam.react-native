import React, {Component} from "react";
import {View} from "react-native";
import {TruckListScreen} from "./screens/TruckList/TruckListScreen";
import {globalStyles} from "./styles/globalStyles";
import {TruckFormScreen} from "./screens/TruckForm/TruckFormScreen";
import {connect} from "react-redux";
import {TruckSocket} from "./components/TruckSocket";
import {Notifications, Permissions} from "expo";
import axios from "axios";
import {BACKEND_URL} from "./constants/backend";
import {IUiReducer, Screen} from "./reducers/ui";
import {MapScreen} from "./screens/Map/MapScreen";
import {Map} from "./screens/Map/index";

class _Main extends Component {
  render() {
    let screen;
    switch (this.props.currentScreen) {
      case 'list':
        screen = <TruckListScreen />;
        break;

      case 'form':
        screen = <TruckFormScreen />;
        break;
    }
    return (
        <TruckSocket/>
        {screen};
  }
}

const mapStateToProps = ({ui: {currentScreen}}) => ({
  currentScreen
});

export const Main = connect(mapStateToProps)(_Main);
