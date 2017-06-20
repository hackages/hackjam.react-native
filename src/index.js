import React from "react";
import {Text, View} from 'react-native';
import {Provider} from "react-redux";

import {store} from "./store/store";
import {Main} from "./Main";

const App = () =>
  <Provider store={store}>
    <Main />
  </Provider>;

const wrongApp = () =>
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Looks like there's something wrong with your index.js </Text>
    <Text style={{transform: [{rotate: '90deg'}], fontSize: 200}}>:(</Text>
  </View>;

export default wrongApp;