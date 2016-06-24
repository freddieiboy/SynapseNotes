import React, { Component } from 'react';
import { View, Text, StyleSheet, AppRegistry } from 'react-native';
import Dashboard from './src/components/Dashboard';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppContainer from './src/AppContainer';

class Synapsenotes extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('Synapsenotes', () => Synapsenotes);
