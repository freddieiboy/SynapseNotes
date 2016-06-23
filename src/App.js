import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <View style={styles.App}>
        <Dashboard />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  App: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#1C272C'
  }
})

export default App;
