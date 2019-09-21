import { createSelectorCreator, defaultMemoize } from "reselect"
import { isEqual } from 'lodash'

const createDeepEqualSelector = createSelectorCreator(defaultMemoize, isEqual)

const getCols = users => users.cols
const getUsersData = users => users.data

export const noPointsUsersSelector = createDeepEqualSelector(
  getUsersData,
  users => {
    // const filteredUsers = users
    const filteredUsers = users.map(nextUser =>
      nextUser.filter((nextVal, index) => index !== 5)
    )
    console.log('update users')
    return filteredUsers
  }
)

export const noPointsColsSelector = createDeepEqualSelector(
  getCols,
  cols => {
    const filteredCols = cols.filter((next, index) => index !== 5)
    return filteredCols
  }
)
