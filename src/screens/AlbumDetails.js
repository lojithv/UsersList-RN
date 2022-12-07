import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AlbumDetails = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1,padding:20 }}>
      <View style={{margin:5,backgroundColor:'#b5cef5',padding:4}}>
        <Text style={{ color: 'black', fontWeight: 'bold' }}>Album ID</Text>
        <Text style={{ color: 'black' }}>{route.params.id}</Text>
      </View>
      <View style={{margin:5,backgroundColor:'#b5cef5',padding:4}}>
        <Text style={{ color: 'black', fontWeight: 'bold' }}>Album Title</Text>
        <Text style={{ color: 'black' }}>{route.params.title}</Text>
      </View>
      <View style={{margin:5,backgroundColor:'#b5cef5',padding:4}}>
        <Text style={{ color: 'black', fontWeight: 'bold' }}>Username</Text>
        <Text style={{ color: 'black' }}>{route.params.username}</Text>
      </View>
    </View>
  )
}

export default AlbumDetails

const styles = StyleSheet.create({})