import { ADD_ROOM, DELETE_ROOM, GET_ROOMS } from './types'

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_ROOMS:
      return { ...state, rooms: state.rooms }
    case ADD_ROOM:
      return {
        ...state,
        rooms: [
          ...state.rooms,
          state.rooms.length === 0 ? 1 : state.rooms[state.rooms.length - 1] + 1
        ]
      }
    case DELETE_ROOM:
      return {
        ...state,
        rooms: state.rooms.filter((room) => room !== action.payload)
      }
    default:
      return state
  }
}
