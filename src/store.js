import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import reducer from "./reducer"
import { people } from "./data"

export const initialState = {
  users: people
}

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

const store = createStoreWithMiddleware(reducer, initialState)

export default store
