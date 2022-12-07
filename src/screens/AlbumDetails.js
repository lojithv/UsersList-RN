import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AlbumDetails = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1,padding:20,justifyContent:'center' }}>
      <View style={{margin:5}}>
        <Text style={{ color: 'black', fontWeight: 'bold' }}>Album ID</Text>
        <Text style={{ color: 'black' }}>{route.params.id}</Text>
      </View>
      <View style={{margin:5}}>
        <Text style={{ color: 'black', fontWeight: 'bold' }}>Album Title</Text>
        <Text style={{ color: 'black' }}>{route.params.title}</Text>
      </View>
      <View style={{margin:5}}>
        <Text style={{ color: 'black', fontWeight: 'bold' }}>User name</Text>
        <Text style={{ color: 'black' }}>{route.params.username}</Text>
      </View>
    </View>
  )
}

export default AlbumDetails

const styles = StyleSheet.create({})