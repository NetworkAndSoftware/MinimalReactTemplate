import { UPDATE_DATETIME } from './actions'

const dateInitialState = new Date()

export const dateReducer = (state = dateInitialState, action) => {
  switch (action.type) {
  case UPDATE_DATETIME:
    return action.datetime
  default:
    return state
  }
}

