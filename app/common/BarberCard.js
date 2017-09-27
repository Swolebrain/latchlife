import React from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
  Image
} from 'react-native';
import PropTypes from 'prop-types';
import {Link} from "react-router-native";
import Text from '../common/Text';
import TitleText from '../common/TitleText';
import config from '../configuration';
const {colors} = config;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  card: {
    shadowColor: "#EDF1F9",
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: {width:0, height:0},
    backgroundColor: '#404041',
    overflow: 'visible',
    marginTop: Math.round(height*.05),
    marginLeft: Math.round(width*0.05),
    marginRight: Math.round(width*0.05),
    alignSelf: 'stretch',
    height: height*.4
  },
  barberName: {
    color: 'white',
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontSize: 40,
    flex:0.2,
    backgroundColor: 'transparent',
  }
});

const BarberCard = props =>{
  return (
    <Link to={"/barbers/"+props.idx}>
      <View style={styles.card}>
        <Image source={props.picture} resizeMode="cover" style={{flex:1, width: undefined, height: undefined}}>
        </Image>
        <TitleText style={styles.barberName}>{props.name}</TitleText>
      </View>
    </Link>
  );
}

BarberCard.PropTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  bookingUrl: PropTypes.string.isRequired
}

export default BarberCard;
