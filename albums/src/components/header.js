//import
import React from 'react';
import { Text } from 'react-native';

//create component
const Header = () => {
  const { textStyle } = styles;
  return <Text style={textStyle}> Albums!</Text>;
};

const styles = {
  textStyle: {
    fontSize: 20
  }
};
//make component available to others
export default Header;
