
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

export default class Header extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.content}>
        <Image
          style={styles.imageHeader}
          resizeMode='cover'
          source={{uri: 'https://static1.squarespace.com/static/569fd2b522482eeee4fcfa53/t/58a4cbfac534a543c82e64af/1487195149287/green+wall+2016.jpg'}}
        >
          <Text style={styles.titleHeader}>Title</Text>
          <Text style={styles.subTitleHeader}>Sub title</Text>
        </Image>
        <View></View>

        <Image
          style={styles.avatar}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    height: 200,
    position: 'relative'
  },
  imageHeader: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleHeader: {
    fontSize: 50,
    backgroundColor: 'transparent'
  },
  subTitleHeader: {
    fontSize: 30,
    backgroundColor: 'transparent',
    fontWeight: '600'
  },
  avatar: {
    position: 'absolute',
    borderRadius: 25,
    zIndex: 10,
    width: 50,
    height: 50,
    top: 125,
    left: (width / 2) - 25
  }
})
