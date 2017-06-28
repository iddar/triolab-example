
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

export default class Item extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.content}>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={{uri: 'https://static1.squarespace.com/static/569fd2b522482eeee4fcfa53/t/58a4cbfac534a543c82e64af/1487195149287/green+wall+2016.jpg'}}
        />
        <View style={styles.note}>
          <Text style={styles.title}>Noticia</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    height: 180
  },
  image: {
    height: 120,
    width: 120
  },
  note: {
    justifyContent: 'center',
    padding: 10,
    flex: 1
  },
  title: {
    fontSize: 25,
    fontWeight: '600'
  }
})
