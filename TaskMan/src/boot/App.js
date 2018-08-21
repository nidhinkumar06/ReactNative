import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the App component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
