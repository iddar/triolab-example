
import React, { Component } from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  Dimensions
} from 'react-native'

const {height, width} = Dimensions.get('window')


export default class Stats extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.content}>
        <View style={styles.box}>
          <Text style={styles.boxText}>123.3</Text>
          <Text>sddsd</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>123.3</Text>
          <Text>sddsd</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>123.3</Text>
          <Text>sddsd</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    height: 80
  },
  box: {
    flex: 1,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxText: {
    fontSize: 25,
    fontWeight: '600'
  }
})
