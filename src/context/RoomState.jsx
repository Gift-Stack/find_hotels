import { useReducer } from 'react'
import RoomContext from './roomContext'
import RoomReducer from './roomReducer'
import { GET_ROOMS, ADD_ROOM, DELETE_ROOM } from './types'

const RoomState = ({ children }) => {
  const initialState = {
    rooms: [1]
  }

  const [state, dispatch] = useReducer(RoomReducer, initialState)

  const getRooms = () => dispatch({ type: GET_ROOMS })

  const addRoom = () => dispatch({ type: ADD_ROOM })

  const deleteRoom = (id) => dispatch({ type: DELETE_ROOM, payload: id })

  return (
    <RoomContext.Provider
      value={{ rooms: state.rooms, addRoom, getRooms, deleteRoom }}
    >
      {children}
    </RoomContext.Provider>
  )
}

export default RoomState
