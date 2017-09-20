import React from 'react';
import Expo, {Font} from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import {NativeRouter, Route} from 'react-router-native';
import Home from './app/routes/Home';
import About from './app/routes/About';
import Barbers from './app/routes/Barbers';

export default class App extends React.Component {
  constructor(props, context, ...args){
    super(props, context, ...args);
    this.state = {
      loaded: false
    }
  }
  async componentWillMount(){
    await Font.loadAsync({
      "Roboto": require("./res/fonts/Roboto-Regular.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({loaded: true})
  }
  render() {
    if (!this.state.loaded) return <Expo.AppLoading />;

    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/barbers" component={Barbers} />
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
