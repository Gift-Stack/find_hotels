import { ADD_ROOM, GET_ROOMS } from './types'

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_ROOMS:
      return state
    case ADD_ROOM:
      return {
        ...state,
        rooms: [...state.rooms, state.rooms[state.rooms.length - 1] + 1]
      }
    default:
      return state
  }
}
