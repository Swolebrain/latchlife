import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Link} from "react-router-native";
import Text from '../common/Text';

const About = props =>{
  return (
    <View style={{flex:1, justifyContent: 'center'}}>
      <Text>About</Text>
      <Text>Info here comes from website</Text>
      <Link to="/"><Text style={{color:'blue'}}>Some kind of home button here too</Text></Link>
    </View>
  );
}

export default About;
