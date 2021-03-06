//ACTION CREATORS
export const createGrid = (grid) => {
  return {
    type: 'CREATE_GRID',
    grid
  }
}

export const addNewNote = (id) => {
  return {
    type: 'ADD_NEW_NOTE',
    id
  }
}

export const setGridMap = (gridMap) =>{
  return {
    type: 'SET_GRID_MAP',
    gridMap
  }
}

//INIT STATE
const initialState = {
  grid: {},
  gridMap: [],
  notesList: [],
  totalNotes: 0,
  noteSize: 100
}


//REDUCERS
const notes = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_GRID':
      return {
        ...state,
        grid: action.grid
      }
    case 'SET_GRID_MAP':
      return {
        ...state,
        gridMap: action.gridMap
      }
    case 'ADD_NEW_NOTE':
      const squareId = state.gridMap[action.id].square;
      return {
        ...state,
        totalNotes: state.totalNotes + 1,
        notesList: [...state.notesList, Object.assign({}, squareId, {
          note: true,
          button: false
        })]
      }
    default:
      return state
  }
}

export default notes;
