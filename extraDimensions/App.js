import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import ExtraDimensions from 'react-native-extra-dimensions-android';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', height: ExtraDimensions.get('STATUS_BAR_HEIGHT')}}>
          <Text style={{ color: 'white' }}>STATUS_BAR_HEIGHT ({ExtraDimensions.get('STATUS_BAR_HEIGHT')})</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>REAL_WINDOW_HEIGHT ({ExtraDimensions.get('REAL_WINDOW_HEIGHT')})</Text>
          <Text>REAL_WINDOW_WIDTH ({ExtraDimensions.get('REAL_WINDOW_WIDTH')})</Text>
        </View>
        <View style={{ backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', height: ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT')}}>
          <Text style={{ color: 'white' }}>SOFT_MENU_BAR_HEIGHT ({ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT')})</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
