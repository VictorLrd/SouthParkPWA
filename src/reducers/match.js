import { DISPATCH_MATCH } from '../actions/match'
import { DISPATCH_MATCH_STAT } from '../actions/match'

const initialState = {
  match: [],
  matchStat: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPATCH_MATCH:
      return {
        ...state,
        match: action.payload
      }
    case DISPATCH_MATCH_STAT:
      return {
        ...state,
        matchStat: action.payload
      }
    default:
      return state
  }
}
