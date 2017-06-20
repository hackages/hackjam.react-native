import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import {switchScreens} from "../../actions/ui";

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(switchScreens('list')),
});

const _Map = (props) =>
  <View>
    <Text>This looks rather empty eh</Text>
  </View>;
export const Map = connect(null, mapDispatchToProps)(_Map);
