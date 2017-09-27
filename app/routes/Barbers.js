import React from 'react';
import { StyleSheet,
  View,
  ScrollView,
  Dimensions
} from 'react-native';
import {Link} from "react-router-native";
import Text from '../common/Text';
import TitleText from '../common/TitleText';
import BarberCard from '../common/BarberCard';
import { Entypo } from '@expo/vector-icons';

import config from '../configuration';
const {colors} = config;

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    justifyContent: 'center',
    backgroundColor: colors.darkBrown,
    alignSelf: 'stretch'
  },
  topBar: {
    backgroundColor: colors.brown,
    paddingTop: height * 0.02,
    paddingBottom: height * 0.02,
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  title:{
    color: 'white',
    textAlign: 'center',
    fontSize: 28,
    flex:1,
    paddingRight: width*0.05
  },
  scrollView:{
    paddingTop: 20,
    paddingBottom: 20
  },
  icon:{
    fontSize:30,
    color:'white',
    width: width*.05
  }
});



const Barbers = props =>{
  const {barberData} = props;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topBar}>
        <Link to="/"><Entypo name="chevron-thin-left" style={styles.icon} /></Link>
        <TitleText style={styles.title}>Barbers</TitleText>
      </View>
      <ScrollView style={styles.scrollView}>

        {
          barberData.map((barber, idx)=> <BarberCard key={idx} idx={idx} {...barber} /> )
        }

      </ScrollView>
    </View>
  );
}

export default Barbers;
