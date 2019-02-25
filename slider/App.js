/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableWithoutFeedback, Button, ImageBackground } from 'react-native';
import ColorDot from './components/color-dot';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      showColor: false,
      blueBackgroundColor: '',
      purpleBackgroundColor: '',
      orangeBackgroundColor: '',
      greenBackgroundColor: '',
      yellowBackgroundColor: '',
      redBackgroundColor: '',
      blueOpacity: 0,
      purpleOpacity: 0,
      currentSelection: '',
      showColorDot: false

    };
  }

  touched(color) {
    switch (color) {
      case "blue":
        return this.setState({  currentSelection: 'blue' })
      case "purple":
        return this.setState({ currentSelection: 'purple'})
      case "orange":
        return this.setState({  currentSelection: 'orange' })
      case "green":
        return this.setState({  currentSelection: 'green' })
      case "red":
        return this.setState({  currentSelection: 'red' })
      case "yellow":
        return this.setState({  currentSelection: 'yellow' })
      default:
        return "No color"
    }

  }




  render() {

    console.log(this.state.currentSelection)
    const { currentSelection,showBlueDot, showPurpleDot,  showRedDot, showOrangeDot, showYellowDot, showGreenDot  } = this.state
   
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./image/swirl-image.png')}
          style={{ marginTop: 30, height:79, width: 375, flexDirection: 'row', justifyContent: 'space-evenly'  }}>
           

         
              
                <ColorDot 
                showColorDot={currentSelection === 'blue'}
                color={currentSelection} 
                onPress={() => this.touched('blue')} />


               <ColorDot 
                showColorDot={currentSelection === 'purple'}
                color={currentSelection} 
                onPress={() => this.touched('purple')} />



                <ColorDot 
                showColorDot={currentSelection === 'red'}
                color={currentSelection} 
                onPress={() => this.touched('red')} />
                
                <ColorDot 
                showColorDot={currentSelection === 'orange'}
                color={currentSelection} 
                onPress={() => this.touched('orange')} />

                <ColorDot 
                showColorDot={currentSelection === 'yellow'}
                color={currentSelection} 
                onPress={() => this.touched('yellow')} />
                  <ColorDot 
                showColorDot={currentSelection === 'green'}
                color={currentSelection} 
                onPress={() => this.touched('green')} />

        </ImageBackground>






      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 30


  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
