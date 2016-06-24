import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Dimensions from 'Dimensions';
import Toolbar from './Toolbar';
import { connect } from 'react-redux';
import { addNewNote, createGrid, setGridMap } from '../redux/notes';
import { flattenObject } from './utils.js';

class Dashboard extends Component {
  componentDidUpdate() {
    let { height, width } = Dimensions.get('window');
    console.log(height, width);
  }
  createGrid = () => {
    //TODO: create grid and add first note
    //TODO: parse out xpos and ypos possible
    //TODO: create final grid object for notes
    //TODO: set the buttons on the right and left.
  }
  setupNotesList = () => {
    //TODO: go through grid list and add to this page.
  }
  render() {
    const grid = this.props.grid;
    console.log(this.props.noteSize)
    return (
      <View style={styles.Dashboard}>
        <View style={styles.main}>
          <Text>MAIN</Text>
        </View>
        <Toolbar
          totalPossiblePoints={0}
          totalNotes={0}
          createGrid={this.createGrid} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Dashboard: {
    flex: 1,
  },
  main: {
    flex: 1,
  }
});

const mapStateToProps = (state) => {
  return {
    notesList: state.notesList,
    totalNotes: state.totalNotes,
    noteSize: state.noteSize,
    grid: state.grid,
    gridMap: state.gridMap
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    createGrid: (grid) => {
      dispatch(createGrid(grid))
    },
    addNewNote: (note) => {
      dispatch(addNewNote(note))
    },
    setGridMap: (gridMap) => {
      dispatch(setGridMap(gridMap))
    }
  }
}

export default connect(mapStateToProps, MapDispatchToProps)(Dashboard)
