import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Main from './src/index';

//Entry point of the app.
const App = () =>
  <View style={styles.container}>
    <Text>Good luck</Text>
  </View>;


const styles = StyleSheet.create({
    container : {
        flex :1,
        justifyContent : "center",
        alignItems : "center"
    }
});

export default App;
