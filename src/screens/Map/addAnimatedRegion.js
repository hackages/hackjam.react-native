// This is an HoC
import React, {createElement} from 'React';
import {MapView} from 'expo';
import * as _ from 'lodash';
import {Easing} from 'react-native';


export const addAnimatedRegion = (WrappedComponent) => {

  return class extends React.Component {

    state = {
      trucks: [],
      regions: {}
    };

    componentWillReceiveProps(nextProps) {
      // Maintain object of AnimatedRegion

      // Filter out the old region that do not exist anymore.
      const newRegions = _.pick(this.state.regions, nextProps.trucks.map(t => t.uuid));

      nextProps.trucks.forEach(nextTruck => {

        // Do we already have a region for this truck?
        const existingRegion = newRegions[nextTruck.uuid];

        if (existingRegion) {

          // Update the existing region to the new location
          existingRegion.timing({
            latitude: nextTruck.coordinate.latitude,
            longitude: nextTruck.coordinate.longitude,
            easing: Easing.linear,
            duration: 1000
          }).start();

        } else {

          // Create a region for this new truck
          newRegions[nextTruck.uuid] = new MapView.AnimatedRegion(nextTruck.coordinate);

        }
      });

      // Create a new array of trucks containing the regions instead of the coordinates
      const newTrucks = nextProps.trucks.map(t => ({...t, coordinate: newRegions[t.uuid]}));

      // Update the state
      this.setState({
        regions: newRegions,
        trucks: newTrucks
      });
    }

    render() {
      return createElement(WrappedComponent, {
        ...this.props,
        trucks: this.state.trucks,
      });
    }
  }
};
