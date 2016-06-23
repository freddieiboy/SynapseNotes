import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Dashboard from './components/Dashboard';
import { $bg } from './components/colors';

class AppContainer extends Component {
  render() {
    return (
      <View style={styles.AppContainer}>
        <Dashboard />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    backgroundColor: $bg
  }
})

export default AppContainer;
