import React from 'react';
import {MapView} from 'expo';
import {connect} from 'react-redux';
import {addAnimatedRegion} from './addAnimatedRegion';
import {ViewStyle} from "react-native";

const images = [
  require('../../../src/assets/truck0.png'),
  require('../../../src/assets/truck1.png'),
  require('../../../src/assets/truck2.png'),
  require('../../../src/assets/truck3.png'),
  require('../../../src/assets/truck4.png'),
  require('../../../src/assets/truck5.png'),
  require('../../../src/assets/truck6.png')
];

const initialRegion = {
  latitude: 50.833573,
  longitude: 4.357477,
  latitudeDelta: 0.0200,
  longitudeDelta: 0.0200,
};

const mapStateToProps = (state) => ({
  trucks: state.trucks.filter((truck) => state.activeTrucks[truck.uuid]),
});

@addAnimatedRegion
class _MapScreen extends React.Component {
  render() {
    return (
      <MapView
        provider="google"
        style={[{flex: 1}, this.props.style]}
        initialRegion={initialRegion}
      >
        {this.props.trucks.map(truck => (
          <MapView.Marker.Animated
            key={truck.uuid}
            anchor={{x: 0.5, y: 0.5}}
            coordinate={truck.coordinate}
            image={images[truck.color]}
            title={`${truck.name} - ${Math.round(truck.speed * 3.6)} km/h`}
          />
        ))}
      </MapView>
    );
  }
}

export const MapScreen = connect(mapStateToProps)(_MapScreen);
