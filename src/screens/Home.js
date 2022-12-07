import { StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableHighlight } from 'react-native'
import React, { useState, useEffect } from 'react'

const Home = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);
  const [Users, setUsers] = useState([])

  const getAlbums = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      const json = await response.json();
      setAlbums(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const getUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await response.json();
      setUsers(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAlbums();
    getUsers();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator /> : (
        <View>
          <Text style={{ color: 'black' }}>Wissam Hamed: 101243840</Text>
          <FlatList
            data={albums}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <TouchableHighlight onPress={() => navigation.navigate('AlbumDetails', { ...item, username: Users.find((u)=> u.id === item.userId)?.username })} underlayColor="white">
                <View style={{ backgroundColor: '#cfd6e3', padding: 5, margin: 4 }}>
                  <Text style={{ color: 'black' }}>{item.title}</Text>
                </View>
              </TouchableHighlight>
            )}
          />
        </View>
      )}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})