import React from 'react';
import Expo, {Font} from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import {NativeRouter, Route} from 'react-router-native';
import Home from './app/routes/Home';
import About from './app/routes/About';
import Barbers from './app/routes/Barbers';
import BarberProfile from './app/routes/BarberProfile';

const barberData = [
  {
    name: 'Chris',
    picture: require('./res/img/chris.jpg'),
    bookingUrl: 'https://latchlifebarbershop.setmore.com/resourcebookingpage/rc1c233b86fd374fc9c1cca39983176ee8bed6e24',
    samplePics: [require('./res/img/cuts/chris-cut01.jpg'), require('./res/img/cuts/chris-cut02.jpg'), require('./res/img/cuts/cut01.jpg'), require('./res/img/cuts/cut02.jpg')],
    caption: 'Do what you love. Be great.',
    bio: 'Lorem ipsum dolor et amel. Lorem ipsum dolor et amel. Lorem ipsum dolor et amel. Lorem ipsum dolor et amel. Lorem ipsum dolor et amel. Lorem ipsum dolor et amel. '
  },
  {
    name: 'Barber 2',
    picture: require('./res/img/barber2.jpg'),
    bookingUrl: 'https://latchlifebarbershop.setmore.com/resourcebookingpage/r03b11506451001773',
    samplePics: [require('./res/img/cuts/cut03.jpg'), require('./res/img/cuts/cut04.jpg'), require('./res/img/cuts/cut05.jpg'), require('./res/img/cuts/cut06.jpg')],
    caption: 'Barber caption 2',
    bio: 'Lorem ipsum dolor et amel. Lorem ipsum dolor et amel. Lorem ipsum dolor et amel. Lorem ipsum dolor et amel. Lorem ipsum dolor et amel. Lorem ipsum dolor et amel. '
  },
  {
    name: 'Barber 3',
    picture: require('./res/img/barber3.jpg'),
    bookingUrl: 'https://latchlifebarbershop.setmore.com/resourcebookingpage/r27541506451006679',
    samplePics: [require('./res/img/cuts/cut07.jpg'), require('./res/img/cuts/cut08.jpg'), require('./res/img/cuts/cut09.jpg'), require('./res/img/cuts/cut10.jpg')],
    caption: 'Barber caption 3',
    bio: 'Lorem ipsum dolor et amel. Lorem ipsum dolor et amel. Lorem ipsum dolor et amel. Lorem ipsum dolor et amel. Lorem ipsum dolor et amel. Lorem ipsum dolor et amel. '
  }
];

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
      "Tablet Gothic": require('./res/fonts/Tablet-Gothic.ttf'),
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
          <Route exact path="/barbers" render={()=><Barbers barberData={barberData} />} />
          <Route path="/barbers/:id" component={({match})=> <BarberProfile match={match} barberData={barberData} />} />
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
