import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { createLogger } from 'redux-logger'

import reducer from "./reducer"
import { people } from "./data"

export const initialState = {
  users: people
}

const logger = createLogger({
  collapsed: true
})

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)

const store = createStoreWithMiddleware(reducer, initialState)

export default store
