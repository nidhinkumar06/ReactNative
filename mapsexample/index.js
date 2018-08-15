/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import AnimatedMarkers from './src/AnimatedMarker';
import AnimatedNavigation from './src/AnimatedNavigation';
import AnimatedPriceMarker from './src/AnimatedPriceMarker';
import AnimatedViews from './src/AnimatedViews';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AnimatedViews);
