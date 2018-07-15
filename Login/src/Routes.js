/* @flow weak */

import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Login from './pages/Login';
import Signup from './pages/Signup';


const Routes = ({}) => {
  return(
    <Router>
      <Stack key="root" hideNavBar={true}>
        <Scene key="login" component={Login} title="Login" initial={true}/>
        <Scene key="signup" component={Signup} title="Register"/>
      </Stack>
   </Router>
  );
};

export default Routes;
