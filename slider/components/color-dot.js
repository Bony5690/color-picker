import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableWithoutFeedback, Button, ImageBackground } from 'react-native';



export default class ColorDot extends Component {
    render() {
        const {  showColorDot } = this.props;
        return (
  

            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View>
                    <View
                        style={{borderWidth: 4, borderColor: 'black', borderRadius: 30, height: 38, width: 38, opacity: showColorDot ? .3 : 0, top: 30}} />
                    <View 
                    style={[{height: 22, width: 22, borderRadius: 30, opacity: showColorDot ? 1 : 0, top: 0, left: 8}, 
                        (() => {
                            switch(this.props.color) {
                              case 'yellow':
                                return { backgroundColor: 'yellow'};
                              case 'red':
                              return { backgroundColor: 'red'};
                              case 'green':
                              return { backgroundColor: '#00c520'};
                              case 'purple':
                              return { backgroundColor: 'purple'};
                              case 'blue':
                              return { backgroundColor: '#008cc5'};
                              default:
                              return { backgroundColor: '#ff8f00'};
                            }
                          })()
                    ]}>
                    </View>

                </View>
            </TouchableWithoutFeedback>
 

        );
    }
}