import React, {Component} from 'react';
import {Text} from 'react-native';
import TitleText from './TitleText';
import config from '../configuration';
const {colors} = config;


export default class Button extends Component{
  constructor(props){
    super(props);
  }
  static propTypes = Text.propTypes
  setNativeProps = (np)=>{
    this._root.setNativeProps(np);
  }
  render(){
    let {props} = this;
    return (
      <TitleText ref={r=>this._root=r} {...props}
        style={[{
          backgroundColor: colors.brown,
          color: 'white',
          fontSize: 28,
          alignSelf: 'stretch',
          textAlign: 'center',
          paddingBottom: 2,
          paddingTop: 10,
          marginBottom: 6,
          justifyContent: 'center',
          borderWidth:2,
          borderColor: 'white'
        }, props.style]}>
          {props.children}
      </TitleText>
    )
  }
}
