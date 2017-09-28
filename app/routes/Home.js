import React from 'react';
import { StyleSheet,
  View,
  Image,
  Dimensions,
  Linking
 } from 'react-native';
import {Link} from "react-router-native";
import Text from '../common/Text';
import TitleText from '../common/TitleText';
import Button from '../common/Button';
import { Entypo } from '@expo/vector-icons';
import config from '../configuration';
const {colors} = config;

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: colors.darkBrown
  },
  shadowContainer:{
    // shadowColor: "#333",
    // shadowRadius: 2,
    // shadowOpacity: 1,
    // shadowOffset: {width:0, height:0},
    // backgroundColor: '#CDCDD0'
    width: 0.9*width,
    alignSelf: 'center',
    flex:0.8,
    marginTop: height*0.1,
  },
  logo: {
    flex:1,
    width: width*0.8,
    alignSelf: 'center'
  },
  badgesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex:1,
    alignItems: 'center',
    paddingLeft: width*0.025,
    paddingRight: width*0.025,
    maxHeight: height*0.25
  },
  pageLink:{
    flex:1,
    // margin: width*0.05,
    // backgroundColor: colors.dustStorm,
    margin: width*0.0125,
  },
  imgBadge:{
    flex:1,
    height: undefined,
    width: undefined,
    margin: width*0.0125,
    justifyContent: 'flex-end'
    // backgroundColor: 'white'
  },
  locationContainer:{
    flex:0.6,
    justifyContent: 'center'
  },
  socialContainer:{
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.brown,
    paddingTop: 8
  },
  centerWhite:{
    textAlign: 'center',
    color: 'white'
  },
});

const Home = props =>{
  return (
    <View style={styles.mainContainer}>
      <View style={styles.shadowContainer}>
        <Image style={styles.logo} resizeMode="contain" source={require('../../res/img/logo-white.png')} />
      </View>
      <View style={styles.badgesContainer}>
        <Link style={styles.pageLink} to="/barbers">
          <Image style={styles.imgBadge} source={require('../../res/img/blades.png')} resizeMode="contain">
            <Button>BOOK NOW</Button>
          </Image>
        </Link>
        <Link style={styles.pageLink} to="/about">
          <Image style={styles.imgBadge} source={require('../../res/img/spinner.png')} resizeMode="contain" >
            <Button>ABOUT US</Button>
          </Image>
        </Link>
      </View>

      <View style={styles.locationContainer}>
        <TitleText style={styles.centerWhite}>Location:</TitleText>
        <Text style={styles.centerWhite}>7750 Okeechobee Blvd</Text>
        <Text style={styles.centerWhite}>West Palm Beach, FL 33411</Text>
      </View>

      <View style={styles.socialContainer}>
        <Entypo name="facebook" size={24}
          onPress={()=>openUrl('fb://page/LatchLifebarbershop','https://www.facebook.com/LatchLifebarbershop/')} color={colors.vintageGrey} />
        <Entypo name="instagram" size={24}
          onPress={()=>openUrl('instagram://user?username=latch_life', 'https://instagram.com/latch_life')} color={colors.vintageGrey} />
        <Entypo name="old-phone" size={24}
          onPress={()=>openUrl('tel:5616297154', undefined)} color={colors.background} />
      </View>
    </View>
  );
}

const openUrl = (mainUrl, fallback) =>{
  Linking.canOpenURL(mainUrl).then(supported => {
    if (!supported && fallback)
      return Linking.openURL(fallback)

    return Linking.openURL(mainUrl);

  }).catch(err => console.error('An error occurred', err));
}

/*
  Image links to book now and about us side by side
  Location section
  FB, Gram, and phone link (highlighted)
*/

export default Home;
