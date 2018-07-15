import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';
import Actions from 'react-native-router-flux';

export default class Signup extends Component {
  goBack(){
    Actions.pop();
  }
  render() {
    return (
      <View>
        <Logo />
        <Form type="Signup"/>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already having account?</Text>
          <TouchableOpacity onPress={this.goBack} style={styles.signupButton}>Login</TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455a64',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
});
