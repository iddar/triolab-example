/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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

import MapView from 'react-native-maps'

function getURL (query) {
  const key = '2268bdf85bc44c6fa6ea918701a4b0db'
  return `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${query}&limit=25&offset=0&rating=G&lang=en`
}

export default class app extends Component {
  constructor (props) {
    super(props)

    this.state = {
      text: 'cat',
      gifs: [],
      coords: {
        latitude: 37.78825,
        longitude: -122.4324
      }
    }
  }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition(({coords}) => {
      console.warn(coords.latitude)
      this.setState({
        coords: coords
      })
    }, () => null)
  }

  onPress () {
    fetch(getURL(this.state.text))
      .then(response => response.json())
      .then(obj => {
        let links = obj.data.map((item) => {
          return item.images.fixed_height_small.url
        })

        this.setState({
          gifs: links
        })
      })
  }

  render () {
    return (
      <View style={styles.container}>

        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={styles.welcome} onPress={this.onPress.bind(this)}>
          Buscar
        </Text>

        <MapView
          style={{width: 500, height: 500}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <MapView.Marker
            coordinate={this.state.coords}
            title={'TEST'}
            description={'sdmklsdf sdf dsf. sdf,m sd,f'}
          />
        </MapView>
        {/* <ScrollView>
          {this.state.gifs.map((gif, idx) => {
            return (
              <Image
                key={idx}
                style={{width: 50, height: 50}}
                source={{uri: gif}}
              />
            )
          })}
        </ScrollView> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

AppRegistry.registerComponent('app', () => app)
