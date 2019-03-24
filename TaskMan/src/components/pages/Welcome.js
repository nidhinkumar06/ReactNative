import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Color from '../../common/styles/Color';
import { Container, Content, Button, Text } from 'native-base';
import PageControl from '../containers/PageControl';

export default class Welcome extends Component {
  render() {
    return (
      <Container>
        <Content>
          <PageControl />
          <Button block rounded>
            <Text>Log In</Text>
          </Button>
          <br/>
          <Button block rounded bordered >
            <Text>Sign up</Text>
          </Button>
          <Text style={styles.text}>Change Language</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text:{
    color: Color.accent,
    textAlign: 'center',
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
});
