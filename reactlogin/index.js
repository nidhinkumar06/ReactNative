/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './src/Login'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Login);
