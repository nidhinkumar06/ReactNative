import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Welcome from '../components/pages/Welcome';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Welcome />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
