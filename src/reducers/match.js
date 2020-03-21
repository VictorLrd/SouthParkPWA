import { DISPATCH_MATCH } from '../actions/match'

const initialState = {
  match: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPATCH_MATCH:
      return {
        ...state,
        match: action.payload
      }
    default:
      return state
  }
}
