import { initialState } from "./store"

function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_POINTS":
      const updatedData = state.users.data.map(next => {
        next[5] = next[5] + 1
        return next
      })

      return {
        ...state,
        users: {
          ...state.users,
          data: updatedData
        }
      }
    case "UPDATE_POINTS_FOR_ID":
      const dataWithOneRecordUpdated = state.users.data.map(next => {
        if (next[0] == action.id) {
          next[5] = next[5] + 1
        }
        return next
      })
      return {
        ...state,
        users: {
          ...state.users,
          data: dataWithOneRecordUpdated
        }
      }
    default:
      return state
  }
}

export default reducer
