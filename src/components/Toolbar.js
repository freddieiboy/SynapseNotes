import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from 'react-native-button';

export default class Toolbar extends Component {
  render() {
    return (
      <View style={styles.Toolbar}>
        <Button
          containerStyle={styles.buttonContainerStyle}
          style={styles.buttonStyle}
          onPress={this.props.createGrid}>
          Create Grid and Add Note
        </Button>
        <Button
          containerStyle={styles.buttonContainerStyle}
          style={styles.buttonStyle}>
          Clear Grid
        </Button>
        <Text style={styles.infoText}>Current Notes: {this.props.totalNotes}</Text>
        <Text style={styles.infoText}>Max Notes: {this.props.totalPossiblePoints}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Toolbar: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    padding: 20
  },
  buttonContainerStyle: {
    padding:10,
    height:45,
    overflow:'hidden',
    borderRadius:4,
    backgroundColor: 'white',
    marginRight: 10,
  },
  buttonStyle: {
    fontSize: 20,
    color: 'black'
  },
  infoText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 30,
    marginTop: 10
  }
})
