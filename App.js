/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1}/>
        <View style={styles.box2}/>
        <View style={styles.box3}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  box1:{
    backgroundColor:'red',
    height:50,
    width:50
  },
  box2:{
    backgroundColor:'yellow',
    height:50,
    width:50
  },
  box3:{
    backgroundColor:'green',
    height:50,
    width:50
  },
})