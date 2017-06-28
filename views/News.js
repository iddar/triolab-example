
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

import Item from './Item'

export default class News extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <ScrollView style={styles.content}>
        <Item />
        <Item />
        <Item />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    height: 80,
    backgroundColor: '#fff',
    flex: 1
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
