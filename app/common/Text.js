import React, {Component} from "react";
import {Text} from "react-native";
import {globalFontFamily} from '../configuration';


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
      <Text style={[this.props.style, {fontFamily: globalFontFamily}]} ref={r=>this._root=r} {...props} >
        {this.props.children}
      </Text>
    );
  }
}
