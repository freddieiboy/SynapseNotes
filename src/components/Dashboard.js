import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

class Dashboard extends Component {
  componentDidUpdate() {
    let { height, width } = Dimensions.get('window');
    console.log(height, width);
  }
  render() {
    return (
      <View>
        <Text>Dashboard</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Dashboard: {
    flex: 1
  }
})

export default Dashboard;
