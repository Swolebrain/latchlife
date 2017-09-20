import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Link} from "react-router-native";
import Text from '../common/Text';

const Home = props =>{
  return (
    <View style={{flex:1, justifyContent: 'center'}}>
      <Text>Home</Text>
      <Text>Elements of this page:</Text>
      <Text>Gold flakes leather look. Check out the latch life website</Text>
      <Text>Big Logo</Text>
      <Link to="/barbers"><Text style={{color:'blue'}}>Book Now</Text></Link>
      <Link to="/about"><Text style={{color:'blue'}}>About Us</Text></Link>
      <Text>Location</Text>
      <Text>Social media links</Text>
      <Text>button to call now</Text>
    </View>
  );
}

export default Home;
