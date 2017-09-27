import React from 'react';
import { StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';
import {Link} from "react-router-native";
import Text from '../common/Text';
import Button from '../common/Button';
import TitleText from '../common/TitleText';
import { Entypo } from '@expo/vector-icons';
import LinearGradient from 'react-native-linear-gradient';

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
  },
  imgContainer:{
    alignSelf: 'stretch',
    overflow: 'hidden',
    height: height*0.4
  },
  imgStyle:{
    width: undefined,
    height: undefined,
    flex:1,
    justifyContent: 'flex-end',
  },
  barberCaption:{
    margin: width*.03,
    color: 'white',
    backgroundColor: 'transparent',
    textShadowColor: colors.brown,
    textShadowOffset: {width:0, height:0},
    textShadowRadius: 2
  },
  imgCard:{
    backgroundColor: 'white',
    padding: width*0.01,
    alignSelf: 'center',
    width: width*.96,
    height: width*.96,
    marginBottom: 0,

  },
  scrollView:{
    padding:20
  }
});

const Barbers = props =>{
  console.log(props);
  const {id} = props.match.params;
  const barber = props.barberData[id];
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topBar}>
        <Link to="/barbers">
          <Entypo name="chevron-thin-left" style={styles.icon} />
        </Link>
        <TitleText style={styles.title}>{barber.name}</TitleText>
      </View>

      <View style={styles.imgContainer}>
        <Image source={barber.picture} style={styles.imgStyle} resizeMode="cover">
          <TitleText style={styles.barberCaption}>{barber.caption}</TitleText>
          <Text style={styles.barberCaption}>{barber.bio}</Text>
        </Image>
      </View>

      <ScrollView style={styles.scrollView}>
        <TitleText style={{margin: width*0.04, color: 'white'}}>Sample Work by {barber.name}</TitleText>
        {
          barber.samplePics.map((img,idx)=>(
            <View style={styles.imgCard} key={idx} >
              <Image source={img} style={styles.imgStyle} resizeMode="cover" />
            </View>
          ) )
        }


      </ScrollView>
      <Button>BOOK NOW</Button>
    </View>
  );
}

export default Barbers;
