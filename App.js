import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

class App extends Component {

  render() {
    return (
      <View>
        <View style={styles.statusBar} />
        
        <Header title={'Albums'} color={'#fc9f00'} />

        <AlbumList />

      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  statusBar: {
    width: '100%',
    height: 24,
    backgroundColor: '#fc7500'
  }
})

export default App;