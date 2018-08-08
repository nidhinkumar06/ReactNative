/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import RNGooglePlaces from 'react-native-google-places';


export default class App extends Component {
  openSearchModal() {
    // RNGooglePlaces.openAutocompleteModal()
    // .then((place) => {
		// console.log(place);
		// // place represents user's selection from the
		// // suggestions and it is a simplified Google Place object.
    // })
    // .catch(error => console.log(error.message));  // error is a Javascript Error object
    RNGooglePlaces.openAutocompleteModal({
      type: 'regions', //can be geocode, address,establishment, regions, cities
	    country: 'IN',
	    latitude: 53.544389,
	    longitude: -113.490927,
	    radius: 10
    }).then((place) => {
      console.log(place);
    })
    .catch(error => console.log(error.message));
  }

  openCurrentLocationModal() {
    RNGooglePlaces.getCurrentPlace()
    .then((results) => console.log(results))
    .catch((error) => console.log(error.message));
  }

  openAutocompletePredictionModal() {
    RNGooglePlaces.getAutocompletePredictions('Pizza', {
  	  type: 'cities',
  	  country: 'IN'
    })
    .then((place) => {
    // console.log(place);
    alert(place);
    })
    .catch(error => console.log(error.message));
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.openSearchModal()}
        >
          <Text>Pick a Place</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.openCurrentLocationModal()}
        >
          <Text>Get Current Location</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.openAutocompletePredictionModal()}
        >
          <Text>Auto Complete prediction</Text>
        </TouchableOpacity>
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
