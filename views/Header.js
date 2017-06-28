
import React, { Component } from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView
} from 'react-native'


export default class Header extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View>
        <View></View>
        <View></View>

        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    height: 200,
    backgroundColor: '#FF0000'
  }
})
