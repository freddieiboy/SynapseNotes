import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class GridCell extends Component {
  render() {
    return (
      <View>
        <Text>GridCell</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  GridCell: {
    flex: 1
  }
})

export default GridCell;
