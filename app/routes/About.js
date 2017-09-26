import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Link} from "react-router-native";
import Text from '../common/Text';
import Button from '../common/Button';
import TitleText from '../common/TitleText';
import config from '../configuration';
const {colors} = config;

const About = props =>{
  return (
    <View style={{flex:1, justifyContent: 'center', backgroundColor: colors.darkBrown, padding:20}}>
      <TitleText style={{color: 'white', marginBottom: 20}}>Men's Services</TitleText>
      <Text style={{color: 'white'}}>Latch Life Barber Shop – the premier spot for men! Haircuts and grooming services are provided
      at your very own barber shop. If you’re looking for the best cut and shave, look no further.
      Don’t waste your time with other shops who won’t deliver the quality we can. Take a  look at the photos,
      Latch Life Barber Shop – is all about quality. We’ll delivery above your expectations!</Text>

      <TitleText style={{color: 'white', marginBottom: 20, marginTop: 40}}>Women's Services</TitleText>
      <Text style={{color: 'white'}}>
        Ladies, if your looking for excellent customer service and a clean environment, you found the
        right place. Come into Latch Life and be pampered by one of our talented stylist. You’ll
        leave feeling great about your hair and feel like your part of the family.
      </Text>
      <Link style={{marginTop: 30, alignSelf: 'center', padding: 10}} to="/">
        <Button style={{width: 160}}>Home</Button>
      </Link>
    </View>
  );
}

export default About;
