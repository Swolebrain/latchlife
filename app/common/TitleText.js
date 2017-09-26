import React, {Component} from "react";
import {Text} from "react-native";
import config from '../configuration';
const {globalTitleFontFamily, colors} = config;


export default class MyText extends Component{
  constructor(props){
    super(props)
  }
  static propTypes = Text.propTypes
  setNativeProps = (np)=>{
    this._root.setNativeProps(np);
  }
  render(){
    let {style, ...props} = this.props;
    return (
      <Text style={[{fontSize: 24, color: colors.vintageGrey}, this.props.style, {fontFamily: globalTitleFontFamily} ]} ref={r=>this._root=r} {...props} >
        {this.props.children}
      </Text>
    );
  }
}
