import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import App from './src/App';

class Synapsenotes extends Component {
  render() {
    return (
      <App />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('Synapsenotes', () => Synapsenotes);
