import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Link} from "react-router-native";
import Text from '../common/Text';

const Barbers = props =>{
  return (
    <View style={{flex:1, justifyContent: 'center'}}>
      <Text>Barbers</Text>
      <Text>This page has a list of barbers with pictures that clients can click on.
      Inside each page, short bio, pictures of prior cuts, link to book now, and schedule</Text>
      <Link to="/"><Text style={{color:'blue'}}>Some kind of home button here too</Text></Link>
    </View>
  );
}

export default Barbers;
